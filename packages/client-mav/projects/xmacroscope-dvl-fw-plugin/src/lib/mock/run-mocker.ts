import casual from 'casual-browserify';
import moment from 'moment';

import {
  Message, RunFinishedMessage, RunStartedMessage, SignupFinishedMessage, SignupStartedMessage,
} from '../shared/message';
import { Run } from '../shared/run';
import { MockPerson } from './mock-person';


export class RunMocker {
  private _mocking = false;

  constructor(private messages: { next: (message: Message) => void }, private initialFakes = 0) {}

  send(message: Message): void {
    this.messages.next(message);
  }

  get mocking(): boolean {
    return this._mocking;
  }

  startMocking(): void {
    if (!this.mocking) {
      this._mocking = true;
      setTimeout(() => this.sendPastRuns(this.initialFakes), 10);
      this.mockRace();
    }
  }

  stopMocking(): void {
    this._mocking = false;
  }

  protected mockRace(): void {
    const runSignupTime = casual.integer(100, 300) + 1000;
    const runPressedTime = casual.integer(100, 400) + 1000;
    const runInitiatedTime = casual.integer(500, 1500) + 1000;
    const runCompletedTime = casual.integer(1000, 4000) + 1000;

    setTimeout(() => {
      this.runSignup();
      setTimeout(() => {
        this.runPressed();
        setTimeout(() => {
          this.runInitiated();
          setTimeout(() => {
            this.runCompleted(runCompletedTime);
            if (this.mocking) {
              this.mockRace();
            }
          }, runCompletedTime);
        }, runInitiatedTime);
      }, runPressedTime);
    }, runSignupTime);
  }

  runSignup(timestamp?: Date): SignupStartedMessage {
    timestamp = this.getTime(timestamp);
    const message = new SignupStartedMessage({ timestamp });
    this.send(message);
    return message;
  }

  runPressed(timestamp?: Date): SignupFinishedMessage {
    timestamp = this.getTime(timestamp);
    const message = new SignupFinishedMessage({
      timestamp,
      run: this.runResults(0, timestamp)
    });
    this.send(message);
    return message;
  }

  runInitiated(timestamp?: Date): RunStartedMessage {
    timestamp = this.getTime(timestamp);
    const message = new RunStartedMessage({
      timestamp,
      run: this.runResults(0, timestamp)
    });
    this.send(message);
    return message;
  }

  runCompleted(timeMillis: number, timestamp?: Date): RunFinishedMessage {
    timestamp = this.getTime(timestamp);
    const message = new RunFinishedMessage({
      timestamp,
      run: this.runResults(timeMillis, timestamp)
    });
    this.send(message);
    return message;
  }

  runResults(timeMillis: number, start: Date): Run {
    start = this.getTime(start);
    const end = moment(start).add(timeMillis, 'milliseconds').local().toDate();
    const person = new MockPerson();
    return new Run({
      id: person.id + start.getTime(), start, end, person
    });
  }

  sendPastRuns(count: number): void {
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
    delete (this as { send?: unknown }).send;
  }

  private sendFullRace(): void {
    const raceCompletedTime = casual.integer(1000, 4000);
    this.runSignup();
    this.runPressed();
    this.runInitiated();
    this.runCompleted(raceCompletedTime, new Date());
  }

  private getTime(timestamp?: Date): Date {
    return moment(timestamp ?? new Date()).local().toDate();
  }
}
