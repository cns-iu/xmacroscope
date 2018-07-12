import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { merge, mergeAll, share, windowToggle } from 'rxjs/operators';

import { RawChangeSet } from '@ngx-dino/core';

import { MessageService } from '../../aisl-backend';
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
      this.starter.next();
      this.running = true;
    }
  }

  stop(): void {
    if (this.running) {
      this.stopper.next();
      this.running = false;
    }
  }
}
