import { Observable } from 'rxjs/Observable';
import { concatMap, filter, map } from 'rxjs/operators';

import { List } from 'immutable';

import { RawChangeSet } from '@ngx-dino/core';
import { RaceCompletedMessage, Message, RunData } from 'aisl-api';


export class ChangeTracker {
  private readonly changeStream: Observable<RawChangeSet<RunData>>;
  private accumulator: List<RunData> = List();

  constructor(
    stream: Observable<Message>,
    public readonly count: number,
    public readonly highlightCount: number
  ) {
    this.changeStream = stream.pipe(
      filter((message) => message instanceof RaceCompletedMessage),
      concatMap((message: RaceCompletedMessage) => message.results.map((run) => {
        return Object.assign({}, run, {
          avatar: message.avatar,
          timestamp: message.timestamp,
          showPersona: true
        });
      })),
      map((run) => this.accumulate(run))
    );
  }

  asObservable(): Observable<RawChangeSet<RunData>> {
    return this.changeStream;
  }

  private accumulate(run: RunData): RawChangeSet<RunData> {
    const inserted: RunData[] = [run];
    const removed: RunData[] = [];
    const replaced: [RunData, any][] = [];

    const { count: maxCount, highlightCount } = this;
    let { accumulator } = this;
    const count = accumulator.size;
    if (count === maxCount) {
      removed.push(accumulator.first());
      accumulator = accumulator.shift();
    }
    this.accumulator = accumulator = accumulator.push(run);

    if (count >= highlightCount) {
      const index = count - highlightCount;
      const data = accumulator.get(index);
      const newData = Object.assign({}, data, {showPersona: false});
      replaced.push([data, newData]);
    }

    return new RawChangeSet(inserted, removed, undefined, replaced);
  }
}
