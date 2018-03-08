import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';

import { List } from 'immutable';

import { Changes } from '@ngx-dino/core';

import { RaceCompletedMessage, Message, RaceResult } from 'aisl-api';


export class ChangeTracker {
  private readonly mappedStream: Observable<Changes>;
  private accumulator: List<RaceCompletedMessage> = List();

  constructor(
    stream: Observable<Message>,
    public readonly count: number,
    public readonly highlightCount: number
  ) {
    this.mappedStream = stream.filter((message: Message) => {
      return message instanceof RaceCompletedMessage;
    }).scan((self: ChangeTracker, message: RaceCompletedMessage) => {
      self.accumulateMessage(message);
      return self;
    }, this).map(() => {
      return this.convertMessagesToChanges();
    });
  }

  asObservable(): Observable<Changes> {
    return this.mappedStream;
  }

  private accumulateMessage(message: RaceCompletedMessage): void {
    const maxCount = this.count + 1;
    const currentCount = this.accumulator.size;
    message.results.forEach((r) => {
      r['avatar'] = message.avatar;
      r['raceTimestamp'] = message.timestamp.getTime();
      r['showPersona'] = true; // set showPersona to true for every incoming race entry.
    });

    if (currentCount === maxCount) {
      this.accumulator = this.accumulator.shift();
    }

    this.accumulator = this.accumulator.push(message);
  }

  private convertMessagesToChanges(): Changes {
    const currentCount = this.accumulator.size;
    let removed: RaceResult[] = [];
    const updated: [string | number | RaceResult, Partial<RaceResult>][] = [];

    if (currentCount > this.count) {
      removed = this.accumulator.first().results;
    }

    const index = this.accumulator.findIndex(function(m) {
      return m.results[0]['showPersona'] === true; // find first element from the beginning which has showPersona set to true.
    });

    // update the entry at the found index, if the index is less than the last highlightCount number of indices.
    if (index === this.accumulator.size - this.highlightCount - 1) {
      this.accumulator = this.accumulator.update(
        index, function(item) {
          item.results.map((r) => {
            r['showPersona'] = false;
            updated.push([r, r]);
          });
          return item;
        }
      );
    }

    return new Changes(this.accumulator.last().results, removed, updated);
  }
}
