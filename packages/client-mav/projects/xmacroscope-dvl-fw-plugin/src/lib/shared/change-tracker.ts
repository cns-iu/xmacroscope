import { RawChangeSet } from '@ngx-dino/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { List } from 'immutable';

import { Run } from './run';
import { RunCompletedMessage, Message } from './message';


export class ChangeTracker {
  private readonly changeStream: Observable<RawChangeSet<Run>>;
  private accumulator: List<Run> = List();

  constructor(
    stream: Observable<Message>,
    public readonly count: number,
    public readonly highlightCount: number
  ) {
    this.changeStream = stream.pipe(
      filter(message => message instanceof RunCompletedMessage),
      map<RunCompletedMessage, Run>(message => message.run),
      map(runs => this.accumulate([runs]))
    );
  }

  asObservable(): Observable<RawChangeSet<Run>> {
    return this.changeStream;
  }

  snapshot(): List<Run> {
    return this.accumulator;
  }

  private accumulate(runs: Run[]): RawChangeSet<Run> {
    let inserted: Run[] = [];
    let removed: Run[] = [];
    const replaced: [Run, any][] = [];

    const addCount = runs.length;
    const {
      accumulator: { size: currentCount },
      count: maxCount, highlightCount
    } = this;
    let { accumulator } = this;

    // Add to/remove from accumulator
    if (addCount >= maxCount) {
      inserted = runs.slice(-maxCount);
      removed = accumulator.toArray();
      accumulator = List(inserted);
    } else {
      const removeCount = Math.max(0, currentCount + addCount - maxCount);

      inserted = runs;
      accumulator = accumulator.concat(runs).toList();
      if (removeCount > 0) {
        removed = accumulator.slice(0, removeCount).toArray();
        accumulator = accumulator.slice(removeCount).toList();
      }
    }

    // Update highlights
    accumulator.reverse().forEach((run, index) => {
      if (index < highlightCount) {
        run.showPersona = true;
      } else if (run.showPersona) {
        const runClone = new Run(run);
        runClone.showPersona = false;
        replaced.push([run, runClone]);
      }
    });

    this.accumulator = accumulator;
    return new RawChangeSet(inserted, removed, undefined, replaced);
  }
}
