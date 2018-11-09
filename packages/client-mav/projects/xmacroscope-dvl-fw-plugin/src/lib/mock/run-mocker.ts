// refer https://angular.io/guide/styleguide#style-03-06 for import line spacing
import * as casual from 'casual-browserify';
import * as moment from 'moment';

import { Run } from '../data-model/run';
import { Message, RunSignupMessage, RunPressedMessage, RunInitiatedMessage, RunCompletedMessage } from '../data-model/message';
import { MockPerson } from './mock-person';

export class RunMocker {
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
    const runSignupTime = casual.integer(100, 300);
    const runPressedTime = casual.integer(100, 400);
    const runInitiatedTime = casual.integer(500, 1500);
    const runCompletedTime = casual.integer(1000, 4000);

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

  runSignup(timestamp?: Date): RunSignupMessage {
    timestamp = this.getTime(timestamp);
    const message = new RunSignupMessage({timestamp});
    this.send(message);
    return message;
  }
  runPressed(timestamp?: Date): RunPressedMessage {
    timestamp = this.getTime(timestamp);
    const message = new RunPressedMessage({
      timestamp,
      run: this.runResults(0, timestamp)
    });
    this.send(message);
    return message;
  }
  runInitiated(timestamp?: Date): RunInitiatedMessage {
    timestamp = this.getTime(timestamp);
    const message = new RunInitiatedMessage({
      timestamp,
      run: this.runResults(0, timestamp)
    });
    this.send(message);
    return message;
  }
  runCompleted(timeMillis: number, timestamp?: Date): RunCompletedMessage {
    timestamp = this.getTime(timestamp);
    const message = new RunCompletedMessage({
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
    delete this.send;
  }

  private sendFullRace(): void {
    const raceCompletedTime = casual.integer(1000, 4000);
    this.runSignup();
    this.runPressed();
    this.runInitiated();
    this.runCompleted(raceCompletedTime, new Date());
  }

  private getTime(timestamp?: Date): Date {
    return moment(timestamp || new Date()).local().toDate();
  }
}
