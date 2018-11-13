import { Run } from './run';

export class Message {
  type: string;
  timestamp: Date;

  constructor(data: any = {}) {
    if (data.run && !(data.run instanceof Run)) {
      data.run = new Run(data.run);
    }
    Object.assign(this, {timestamp: new Date()}, data);
  }
}

export class RunSignupMessage extends Message {
  type = 'run-signup';
}

export class RunPressedMessage extends Message {
  type = 'run-pressed';
  run: Run;
}

export class RunInitiatedMessage extends Message {
  type = 'run-initiated';
  run: Run;
}

export class RunCompletedMessage extends Message {
  type = 'run-completed';
  run: Run;
}
