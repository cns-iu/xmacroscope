import { RawChangeSet } from '@ngx-dino/core';
import { Observable, Subject, of, merge as mergeObservables } from 'rxjs';
import { merge, mergeAll, share, windowToggle } from 'rxjs/operators';
import { List } from 'immutable';

import { ChangeTracker } from './change-tracker';
import { Run } from './run';
import { Message } from './message';


export class RunStreamController {
  private messages = new Subject<Message>();
  public readonly messageStream = this.messages.asObservable().pipe(share());
  public readonly runStream: Observable<RawChangeSet<Run>>;

  private readonly changeTracker: ChangeTracker;
  private readonly emitter = new Subject<RawChangeSet<Run>>();
  private readonly starter = new Subject<any>();
  private readonly stopper = new Subject<any>();
  private running = true;
  private snapshot = List<Run>();

  constructor(public historySize = 50, public highlightCount = 4) {
    this.changeTracker = new ChangeTracker(this.messageStream, this.historySize, this.highlightCount);
    this.runStream = this.changeTracker.asObservable().pipe(
      windowToggle(this.starter, () => this.stopper),
      mergeAll() as (s: any) => Observable<RawChangeSet<Run>>,
      merge(this.emitter),
      share()
    );
    setTimeout(() => this.starter.next(), 0);
    this.runStream.subscribe();
  }

  sendMessage(message: Message) {
    this.messages.next(message);
  }

  sendRunChange(change: RawChangeSet<Run>): void {
    this.emitter.next(change);
  }

  createRunStream(): Observable<RawChangeSet<Run>> {
    const snapshot = of(RawChangeSet.fromArray(this.changeTracker.snapshot().toArray()));
    return mergeObservables(snapshot, this.runStream);
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
    snapshot1: List<Run>,
    snapshot2: List<Run>
  ): RawChangeSet<Run> {
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
          .map((item): [Run, Run] => [item, item])
          .toArray()
      );
    } else {
      return new RawChangeSet(snapshot2.toArray(), snapshot1.toArray());
    }
  }
}
