import { Person } from '../data-model/person';

export class Message {
  type: string;
  timestamp: Date;

  constructor(options: any = {}) {
    Object.assign(this, {
      timestamp: new Date()
    }, options);
  }
}

export class RunSelectedMessage extends Message {
  type = 'run-selected';
}

export class RaceInitiatedMessage extends Message {
  type = 'race-initiated';
}

export interface RaceResult {
  lane: number; // 1 to N
  persona: Person;
  started: boolean;
  falseStart: boolean;
  timeMillis: number;
}

export class RaceCompletedMessage extends Message {
  type = 'race-completed';
  results: RaceResult[];
}
