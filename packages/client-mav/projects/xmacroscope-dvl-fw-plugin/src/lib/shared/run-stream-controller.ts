import { RawChangeSet } from '@ngx-dino/core';
import { merge, Observable, of, Subject } from 'rxjs';
import { mergeAll, share, windowToggle } from 'rxjs/operators';

import { ChangeTracker } from './change-tracker';
import { Message } from './message';
import { Run } from './run';


export class RunStreamController {
  private messages = new Subject<Message>();
  public readonly messageStream = this.messages.asObservable().pipe(share());
  public readonly runStream: Observable<RawChangeSet<Run>>;
  public opponentRuns: Run[] = [];

  private readonly changeTracker: ChangeTracker;
  private readonly emitter = new Subject<RawChangeSet<Run>>();
  private readonly starter = new Subject<any>();
  private readonly stopper = new Subject<any>();
  private running = true;
  private snapshot: readonly Run[] = [];

  constructor(public historySize = 50, public highlightCount = 4) {
    this.changeTracker = new ChangeTracker(this.messageStream, this.historySize, this.highlightCount);
    this.runStream = merge(this.changeTracker.asObservable().pipe(
      windowToggle(this.starter, () => this.stopper),
      mergeAll()
    ), this.emitter).pipe(share());
    setTimeout(() => this.starter.next(), 0);
    this.runStream.subscribe();
  }

  sendMessage(message: Message) {
    this.messages.next(message);
  }

  sendRunChange(change: RawChangeSet<Run>): void {
    this.emitter.next(change);
  }

  selectRuns(runs: Run[]) {
    const change = this.changeTracker.selectRuns(runs);
    this.emitter.next(change);
  }

  createRunStream(): Observable<RawChangeSet<Run>> {
    const opponentRuns = of(RawChangeSet.fromArray(this.opponentRuns));
    const snapshot = of(RawChangeSet.fromArray(this.changeTracker.snapshot()));
    return merge(opponentRuns, snapshot, this.runStream);
  }

  start(): void {
    if (!this.running) {
      this.emitter.next(this.snapshotDiff(
        [...this.snapshot], this.changeTracker.snapshot()
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
    snapshot1: Run[],
    snapshot2: Run[]
  ): RawChangeSet<Run> {
    if (snapshot1.length === 0) {
      return new RawChangeSet(snapshot2);
    } else if (snapshot2.length === 0) {
      return new RawChangeSet(undefined, snapshot1);
    }

    const first = snapshot2[0];
    const index = snapshot1.lastIndexOf(first);
    if (index >= 0) {
      const diffCount = snapshot1.length - index;
      return new RawChangeSet(
        snapshot2.slice(diffCount),
        snapshot1.slice(0, index),
        undefined,
        snapshot2.slice(0, diffCount)
          .map((item): [Run, Run] => [item, item])
      );
    } else {
      return new RawChangeSet(snapshot2, snapshot1);
    }
  }
}
