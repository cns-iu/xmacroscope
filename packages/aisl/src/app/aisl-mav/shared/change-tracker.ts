import { Observable } from 'rxjs/Observable';
import { bufferTime, concatMap, filter, map } from 'rxjs/operators';

import { List } from 'immutable';

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
    const inserted: RunData[] = runs;
    let removed: RunData[] = [];
    const replaced: [RunData, any][] = [];

    const addCount = runs.length;
    const {
      accumulator: { size: currentCount },
      count: maxCount, highlightCount
    } = this;
    let { accumulator } = this;

    // Add to/remove from accumulator
    accumulator = accumulator.concat(runs).toList();
    const removeCount = Math.max(0, currentCount + addCount - maxCount);
    if (removeCount > 0) {
      removed = accumulator.slice(0, removeCount).toArray();
      accumulator = accumulator.slice(removeCount).toList();
    }

    // Update highlights
    accumulator.reverse().forEach((run, index) => {
      if (index < highlightCount) {
        run.showPersona = true;
      } else if (run.showPersona) {
        run.showPersona = false;
        replaced.push([run, run]);
      }
    });

    this.accumulator = accumulator;
    return new RawChangeSet(inserted, removed, undefined, replaced);
  }
}
