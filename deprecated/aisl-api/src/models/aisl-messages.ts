import { Message } from './message';
import { Avatar } from './avatar';
import { Persona } from './persona';

export class RunSelectedMessage extends Message {
  type = 'run-selected';
  avatar: Avatar;
}

export class RaceInitiatedMessage extends Message {
  type = 'race-initiated';
  avatar: Avatar;
}

export interface RaceResult {
  lane: number; // 1 to N
  persona: Persona;
  started: boolean;
  falseStart: boolean;
  timeMillis: number;
}

export class RaceCompletedMessage extends Message {
  type = 'race-completed';
  avatar: Avatar;
  results: RaceResult[];
}
