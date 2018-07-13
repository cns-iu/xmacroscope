import * as casual from 'casual-browserify';

import {
  Persona, Avatar, Message, RunSelectedMessage,
  RaceInitiatedMessage, RaceCompletedMessage, RaceResult
} from '../models';

import { MockAvatar } from './avatar.mock';
import { MockPersona } from './persona.mock';


export class RaceMocker {
  private _mocking = false;

  constructor(private messageService: { send: (message: Message) => void }) {}

  send(message: Message) {
    this.messageService.send(message);
  }

  get mocking(): boolean {
    return this._mocking;
  }

  startMocking() {
    if (!this.mocking) {
      this._mocking = true;
      setTimeout(() => this.sendPastRuns(50), 10);
      this.mockRace();
    }
  }
  stopMocking() {
    this._mocking = false;
  }

  protected mockRace() {
    const runSelectedTime = casual.integer(100, 500),
      raceInitiatedTime = casual.integer(500, 1500),
      raceCompletedTime = casual.integer(1000, 4000);

    setTimeout(() => {
      const runSelectedMessage = this.runSelected();
      setTimeout(() => {
        this.raceInitiated(runSelectedMessage.avatar);
        setTimeout(() => {
          this.raceCompleted(runSelectedMessage.avatar, raceCompletedTime);

          if (this.mocking) {
            this.mockRace();
          }
        }, raceCompletedTime);
      }, raceInitiatedTime);
    }, runSelectedTime);
  }

  runSelected(): RunSelectedMessage {
    const message = new RunSelectedMessage({
      avatar: MockAvatar()
    });
    this.send(message);
    return message;
  }
  raceInitiated(avatar: Avatar): RaceInitiatedMessage {
    const message = new RaceInitiatedMessage({
      avatar
    });
    this.send(message);
    return message;
  }
  raceCompleted(avatar: Avatar, maxTime: number): RaceCompletedMessage {
    const message = new RaceCompletedMessage({
      avatar,
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
      persona: MockPersona(),
      started: casual.coin_flip,
      falseStart: casual.coin_flip,
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
    }

    for (;i < count; ++i) {
      this.sendFullRace();
    }

    // Restore send method
    delete this.send;
  }

  private sendFullRace(): void {
    const raceCompletedTime = casual.integer(1000, 4000);
    const runSelectedMessage = this.runSelected();
    this.raceInitiated(runSelectedMessage.avatar);
    this.raceCompleted(runSelectedMessage.avatar, raceCompletedTime);
  }
}
