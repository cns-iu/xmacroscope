import { RawChangeSet } from '@ngx-dino/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { Message, RunFinishedMessage } from './message';
import { Run } from './run';


export class ChangeTracker {
  private readonly changeStream: Observable<RawChangeSet<Run>>;
  private accumulator: readonly Run[] = [];
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

  snapshot(): Run[] {
    return [...this.accumulator];
  }

  private accumulate(runs: Run[]): RawChangeSet<Run> {
    let inserted: Run[] = [];
    let removed: Run[] = [];
    const replaced: [Run, any][] = [];

    const addCount = runs.length;
    const {
      accumulator: { length: currentCount },
      count: maxCount, highlightCount
    } = this;
    let { accumulator } = this;

    // Add to/remove from accumulator
    if (addCount >= maxCount) {
      inserted = runs.slice(-maxCount);
      removed = [...accumulator];
      accumulator = inserted;
    } else {
      const removeCount = Math.max(0, currentCount + addCount - maxCount);

      inserted = runs;
      accumulator = accumulator.concat(runs);
      if (removeCount > 0) {
        removed = accumulator.slice(0, removeCount);
        accumulator = accumulator.slice(removeCount);
      }
    }

    // Update highlights
    accumulator.forEach((run, index) => {
      const fromTheEnd = accumulator.length - index;
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
        const fromTheEnd = accumulator.length - index;
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

    this.accumulator = newSnapshot;
    return new RawChangeSet([], [], [], replaced);
  }
}
