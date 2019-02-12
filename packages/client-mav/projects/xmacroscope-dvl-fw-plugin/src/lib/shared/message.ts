import { Run } from './run';

export class Message {
  type: string;
  timestamp: Date;
  run?: Run;

  constructor(data: any = {}) {
    if (data.run && !(data.run instanceof Run)) {
      data.run = new Run(data.run);
    }
    Object.assign(this, {timestamp: new Date()}, data);
  }
}

export class SignupStartedMessage extends Message {
  type = 'signup-started';
}

export class SignupFinishedMessage extends Message {
  type = 'signup-finished';
}

export class RunStartedMessage extends Message {
  type = 'run-started';
}

export class RunFinishedMessage extends Message {
  type = 'run-finished';
}
