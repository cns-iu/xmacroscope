// refer https://angular.io/guide/styleguide#style-03-06 for import line spacing
import * as casual from 'casual-browserify';
import { pick } from 'lodash';
import { Observable } from 'rxjs';

import { RawChangeSet } from '@ngx-dino/core';
import { Run } from '../data-model/run';
import { Message, RaceInitiatedMessage, RaceCompletedMessage, RaceResult, RunSelectedMessage } from './message';
import { MockPerson } from './mock-person';

export class RaceMocker {
  private _mocking = false;

  constructor(private messageService: { send: (message: Message) => void }, private initialFakes = 0) {}

  send(message: Message) {
    this.messageService.send(message);
  }

  get mocking(): boolean {
    return this._mocking;
  }

  startMocking() {
    if (!this.mocking) {
      this._mocking = true;
      setTimeout(() => this.sendPastRuns(this.initialFakes), 10);
      this.mockRace();
    }
  }
  stopMocking() {
    this._mocking = false;
  }

  protected mockRace() {
    const runSelectedTime = casual.integer(100, 500);
    const raceInitiatedTime = casual.integer(500, 1500);
    const raceCompletedTime = casual.integer(1000, 4000);

    setTimeout(() => {
      const runSelectedMessage = this.runSelected();
      setTimeout(() => {
        this.raceInitiated();
        setTimeout(() => {
          this.raceCompleted(raceCompletedTime);

          if (this.mocking) {
            this.mockRace();
          }
        }, raceCompletedTime);
      }, raceInitiatedTime);
    }, runSelectedTime);
  }

  runSelected(): RunSelectedMessage {
    const message = new RunSelectedMessage();
    this.send(message);
    return message;
  }
  raceInitiated(): RaceInitiatedMessage {
    const message = new RaceInitiatedMessage();
    this.send(message);
    return message;
  }
  raceCompleted(maxTime: number): RaceCompletedMessage {
    const message = new RaceCompletedMessage({
      results: [this.raceResults(maxTime, 1)]
    });
    if (casual.coin_flip) {
      message.results.push(this.raceResults(casual.integer(2000, maxTime), 2));
    }
    this.send(message);
    return message;
  }
  raceResults(time: number, lane: number): RaceResult {
    return <RaceResult>{
      lane,
      persona: new MockPerson(),
      started: !!casual.coin_flip,
      falseStart: !!casual.coin_flip,
      timeMillis: time
    };
  }

  private sendPastRuns(count: number): void {
    let i = 0;

    // Evil! Hijack send method
    const oldSend = this.send;
    this.send = (message: Message) => {
      message.timestamp.setMinutes(i);
      oldSend.call(this, message);
    };

    for (; i < count; ++i) {
      this.sendFullRace();
    }

    // Restore send method
    delete this.send;
  }

  private sendFullRace(): void {
    const raceCompletedTime = casual.integer(1000, 4000);
    this.runSelected();
    this.raceInitiated();
    this.raceCompleted(raceCompletedTime);
  }
}
