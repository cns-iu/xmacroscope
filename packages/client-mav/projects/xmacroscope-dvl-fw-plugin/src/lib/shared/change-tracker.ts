import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { List } from 'immutable';
import { RawChangeSet } from '@ngx-dino/core';

import { Run } from './run';
import { RunFinishedMessage, Message } from './message';


export class ChangeTracker {
  private readonly changeStream: Observable<RawChangeSet<Run>>;
  private accumulator: List<Run> = List();
  private runsSelected = false;

  constructor(
    stream: Observable<Message>,
    public readonly count: number,
    public readonly highlightCount: number
  ) {
    this.changeStream = stream.pipe(
      filter(message => message instanceof RunFinishedMessage),
      map<RunFinishedMessage, Run>(message => message.run),
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
    accumulator.forEach((run, index) => {
      const fromTheEnd = accumulator.size - index;
      if (fromTheEnd <= highlightCount && !this.runsSelected) {
        run.highlighted = true;
      } else if (run.highlighted) {
        const runClone = new Run(run);
        run.highlighted = false;
        runClone.highlighted = false;
        replaced.push([run, runClone]);
      }
    });

    this.accumulator = accumulator;
    return new RawChangeSet(inserted, removed, undefined, replaced);
  }

  selectRuns(runs: Run[]): RawChangeSet<Run> {
    const runsSelected = this.runsSelected = runs.length > 0;
    const replaced: [Run, Run][] = [];

    const run2id = {};
    runs.forEach(r => run2id[r.id] = r);

    const newSnapshot: Run[] = [];
    // FIXME: This is a little too complicated/wordy. Simplify.
    if (runsSelected) {
      this.accumulator.forEach((run) => {
        if (run2id.hasOwnProperty(run.id)) {
          const runClone = new Run(run);
          runClone.selected = true;
          runClone.highlighted = false;
          replaced.push([run, runClone]);
          newSnapshot.push(runClone);
        } else if (run.selected || run.highlighted) {
          const runClone = new Run(run);
          runClone.selected = false;
          runClone.highlighted = false;
          replaced.push([run, runClone]);
          newSnapshot.push(runClone);
        } else {
          newSnapshot.push(run);
        }
      });
    } else {
      const highlightCount = this.highlightCount;
      this.accumulator.forEach((run, index, accumulator) => {
        const fromTheEnd = accumulator.size - index;
        if (fromTheEnd <= highlightCount) {
          const runClone = new Run(run);
          runClone.highlighted = true;
          runClone.selected = false;
          replaced.push([run, runClone]);
          newSnapshot.push(runClone);
        } else if (run.highlighted || run.selected) {
          const runClone = new Run(run);
          runClone.highlighted = false;
          runClone.selected = false;
          replaced.push([run, runClone]);
          newSnapshot.push(runClone);
        } else {
          newSnapshot.push(run);
        }
      });
    }

    this.accumulator = List<Run>(newSnapshot);
    return new RawChangeSet([], [], [], replaced);
  }
}
