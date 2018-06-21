import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';

import { List } from 'immutable';

import { RawChangeSet } from '@ngx-dino/core';

import { RaceCompletedMessage, Message, RaceResult } from 'aisl-api';


export class ChangeTracker {
  private readonly mappedStream: Observable<RawChangeSet>;
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

  asObservable(): Observable<RawChangeSet> {
    return this.mappedStream;
  }

  private accumulateMessage(message: RaceCompletedMessage): void {
    const maxCount = this.count + 1;
    const currentCount = this.accumulator.size;
    if (currentCount === maxCount) {
        this.accumulator = this.accumulator.shift();
    }
    this.accumulator = this.accumulator.push(message);
  }

  private getRaceResults(message: RaceCompletedMessage, showPersona = true): RaceResult[] {
    return message.results.map((r) => {
      return Object.assign({}, r, {
        avatar: message.avatar,
        timestamp: message.timestamp,
        showPersona
      });
    });
  }

  private convertMessagesToChanges(): RawChangeSet {
    const currentCount = this.accumulator.size;
    const added = this.getRaceResults(this.accumulator.last(), true);
    const removed: RaceResult[] = [];
    let updated: [string | number | RaceResult, Partial<RaceResult>][] = [];

    const index = currentCount - this.highlightCount - 1;
    // update the entry at the found index, if the index is less than the last highlightCount number of indices.
    if (index >= 0) {
      updated = <[string | number | RaceResult, Partial<RaceResult>][]>
          this.getRaceResults(this.accumulator.get(index), false).map((r) => [r, r]);
    }

    return new RawChangeSet(added, removed, updated);
  }
}
