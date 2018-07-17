import { MockAvatar } from './avatar.mock';
import { MockPersona } from './persona.mock';
import { casual } from './casual';

export class RaceMocker {
  _mocking = false;

  constructor(messageService /* private messageService: { send: (message: Message) => void } */) {
    this.messageService = messageService;
  }

  send(message) {
    this.messageService.send(message);
  }

  mocking() {
    return this._mocking;
  }

  startMocking() {
    if (!this.mocking()) {
      this._mocking = true;
      this.mockRace();
    }
  }
  stopMocking() {
    this._mocking = false;
  }

  mockRace() {
    const runSelectedTime = casual.integer(100, 500),
      raceInitiatedTime = casual.integer(500, 1500),
      raceCompletedTime = casual.integer(1000, 4000);

    setTimeout(() => {
      const runSelectedMessage = this.runSelected();
      setTimeout(() => {
        this.raceInitiated(runSelectedMessage.avatar);
        setTimeout(() => {
          this.raceCompleted(runSelectedMessage.avatar, raceCompletedTime);

          if (this.mocking()) {
            this.mockRace();
          }
        }, raceCompletedTime);
      }, raceInitiatedTime);
    }, runSelectedTime);
  }

  runSelected() {
    const message = {
      type: 'run-selected',
      timestamp: new Date().toISOString(),
      avatar: MockAvatar()
    };
    this.send(message);
    return message;
  }
  raceInitiated(avatar) {
    const message = {
      type: 'race-initiated',
      timestamp: new Date().toISOString(),
      avatar
    };
    this.send(message);
    return message;
  }
  raceCompleted(avatar, maxTime) {
    const message = {
      type: 'race-completed',
      timestamp: new Date().toISOString(),
      avatar,
      results: [this.raceResults(maxTime, 1)]
    };
    if (casual.coin_flip) {
      message.results.push(this.raceResults(casual.integer(2000, maxTime), 2));
    }
    this.send(message);
    return message;
  }
  raceResults(time, lane) {
    return {
      lane,
      persona: MockPersona(),
      started: casual.coin_flip,
      falseStart: casual.coin_flip,
      timeMillis: time
    };
  }
}
