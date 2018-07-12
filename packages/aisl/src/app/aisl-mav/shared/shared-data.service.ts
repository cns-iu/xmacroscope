import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { merge, mergeAll, share, windowToggle } from 'rxjs/operators';

import { List } from 'immutable';

import { RawChangeSet } from '@ngx-dino/core';
import { MessageService } from '../../aisl-backend';
import { RunData } from 'aisl-api';
import { ChangeTracker } from './change-tracker';


@Injectable()
export class SharedDataService {
  private readonly changeTracker: ChangeTracker;
  private readonly rawStream: Observable<RawChangeSet>;
  private readonly emitter = new Subject<RawChangeSet>();
  private readonly starter = new Subject<any>();
  private readonly stopper = new Subject<any>();
  private readonly stream: Observable<RawChangeSet>;
  private running = true;
  private snapshot = List<RunData>();

  historySize = 50; // TODO
  highlightCount = 4; // TODO

  constructor(private messageService: MessageService) {
    this.changeTracker = new ChangeTracker(
      messageService.asObservable(), this.historySize, this.highlightCount
    );
    this.stream = this.changeTracker.asObservable().pipe(
      windowToggle(this.starter, () => this.stopper),
      mergeAll() as (s: any) => Observable<RawChangeSet>,
      merge(this.emitter),
      share()
    );
    setTimeout(() => this.starter.next(), 0);
  }

  createStream(): Observable<RawChangeSet> {
    return this.stream;
  }

  emit(change: RawChangeSet): void {
    this.emitter.next(change);
  }

  start(): void {
    if (!this.running) {
      this.emitter.next(this.snapshotDiff(
        this.snapshot, this.changeTracker.snapshot()
      ));
      this.starter.next();
      this.running = true;
    }
  }

  stop(): void {
    if (this.running) {
      this.stopper.next();
      this.running = false;
      this.snapshot = this.changeTracker.snapshot();
    }
  }

  private snapshotDiff(
    snapshot1: List<RunData>,
    snapshot2: List<RunData>
  ): RawChangeSet<RunData> {
    if (snapshot1.size === 0) {
      return new RawChangeSet(snapshot2.toArray());
    } else if (snapshot2.size === 0) {
      return new RawChangeSet(undefined, snapshot1.toArray());
    }

    const first = snapshot2.first();
    const index = snapshot1.findLastIndex((value) => value === first);
    if (index >= 0) {
      const diffCount = snapshot1.size - index;
      return new RawChangeSet(
        snapshot2.slice(diffCount).toArray(),
        snapshot1.slice(0, index).toArray(),
        undefined,
        snapshot2.slice(0, diffCount)
          .map((item): [RunData, RunData] => [item, item])
          .toArray()
      );
    } else {
      return new RawChangeSet(snapshot2.toArray(), snapshot1.toArray());
    }
  }
}
