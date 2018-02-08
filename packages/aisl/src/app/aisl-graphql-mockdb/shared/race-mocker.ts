import {
  Persona, Avatar, Message, RunSelectedMessage,
  RaceInitiatedMessage, RaceCompletedMessage, RaceResult
} from '../../aisl-backend/shared/models';

import { MockAvatar } from './avatar.mock';
import { MockPersona } from './persona.mock';

import { randomInt, randomBool } from './random';

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
      this.mockRace();
    }
  }
  stopMocking() {
    this._mocking = false;
  }

  protected mockRace() {
    const runSelectedTime = randomInt(100, 500),
      raceInitiatedTime = randomInt(500, 1500),
      raceCompletedTime = randomInt(1000, 4000);

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
    if (randomBool()) {
      message.results.push(this.raceResults(randomInt(2000, maxTime), 2));
    }
    this.send(message);
    return message;
  }
  raceResults(time: number, lane: number): RaceResult {
    return <RaceResult>{
      lane,
      persona: MockPersona(),
      started: randomBool(),
      falseStart: randomBool(),
      timeMillis: time
    };
  }
}
