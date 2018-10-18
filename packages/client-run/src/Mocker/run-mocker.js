import { MockAvatar } from './avatar.mock';
import { MockPersona } from './persona.mock';
import { casual } from './casual';

export class RunMocker {
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
      this.mockRun();
    }
  }
  stopMocking() {
    this._mocking = false;
  }

  mockRun() {
    const runSelectedTime = casual.integer(100, 500),
      runInitiatedTime = casual.integer(500, 1500),
      runCompletedTime = casual.integer(1000, 4000);

    setTimeout(() => {
      const runSelectedMessage = this.runSelected();
      setTimeout(() => {
        this.runInitiated(runSelectedMessage.avatar);
        setTimeout(() => {
          this.runCompleted(runSelectedMessage.avatar, runCompletedTime);

          if (this.mocking()) {
            this.mockRun();
          }
        }, runCompletedTime);
      }, runInitiatedTime);
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
  runInitiated(avatar) {
    const message = {
      type: 'run-initiated',
      timestamp: new Date().toISOString(),
      avatar
    };
    this.send(message);
    return message;
  }
  runCompleted(avatar, maxTime) {
    const message = {
      type: 'run-completed',
      timestamp: new Date().toISOString(),
      avatar,
      results: [this.runResults(maxTime, 1)]
    };
    if (casual.coin_flip) {
      message.results.push(this.runResults(casual.integer(2000, maxTime), 2));
    }
    this.send(message);
    return message;
  }
  runResults(time, lane) {
    return {
      lane,
      persona: MockPersona(),
      started: casual.coin_flip,
      falseStart: casual.coin_flip,
      timeMillis: time
    };
  }
}
