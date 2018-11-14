import { Observable } from 'rxjs/Observable';
import { bufferTime, concatMap, filter, map } from 'rxjs/operators';

import { List } from 'immutable';
import { clone } from 'lodash';

import { RawChangeSet } from '@ngx-dino/core';
import { RaceCompletedMessage, Message, RunData } from 'aisl-api';


export class ChangeTracker {
  private readonly changeStream: Observable<RawChangeSet<RunData>>;
  private accumulator: List<RunData> = List();

  constructor(
    stream: Observable<Message>,
    public readonly count: number,
    public readonly highlightCount: number,
    public readonly bufferInterval = 100
  ) {
    this.changeStream = stream.pipe(
      filter((message) => message instanceof RaceCompletedMessage),
      concatMap((message: RaceCompletedMessage) => message.results.map((run) => {
        return Object.assign({}, run, {
          avatar: message.avatar,
          timestamp: message.timestamp,
          showPersona: false
        });
      })),
      bufferTime(bufferInterval),
      filter((runs) => runs.length > 0),
      map((runs) => this.accumulate(runs))
    );
  }

  asObservable(): Observable<RawChangeSet<RunData>> {
    return this.changeStream;
  }

  snapshot(): List<RunData> {
    return this.accumulator;
  }

  private accumulate(runs: RunData[]): RawChangeSet<RunData> {
    let inserted: RunData[] = [];
    let removed: RunData[] = [];
    const replaced: [RunData, any][] = [];

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
        const runClone = clone(run);
        runClone.showPersona = false;
        replaced.push([run, runClone]);
      }
    });

    this.accumulator = accumulator;
    return new RawChangeSet(inserted, removed, undefined, replaced);
  }
}