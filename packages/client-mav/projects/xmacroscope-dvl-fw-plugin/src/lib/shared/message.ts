import { Run, RunOptions } from './run';


export interface MessageOptions {
  type?: string;
  timestamp?: Date;
  run?: Run | RunOptions;
}

export class Message {
  type = '';
  timestamp: Date;
  run?: Run;

  constructor(options: MessageOptions = {}) {
    const { type, timestamp, run } = options;
    this.type = type ?? this.type;
    this.timestamp = timestamp ?? new Date();

    if (run) {
      this.run = run instanceof Run ? run : new Run(run);
    }
  }
}

export class SignupStartedMessage extends Message {
  override type = 'signup-started';
}

export class SignupFinishedMessage extends Message {
  override type = 'signup-finished';
}

export class RunStartedMessage extends Message {
  override type = 'run-started';
}

export class RunFinishedMessage extends Message {
  override type = 'run-finished';
  override run!: Run;
}
