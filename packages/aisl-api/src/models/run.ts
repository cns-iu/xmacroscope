import { Avatar } from './avatar';
import { Persona } from './persona';

export interface Run {
  avatar: Avatar;
  persona: Persona;
  timestamp: Date;

  lane: number; // 1 to N
  started: boolean;
  falseStart: boolean;
  timeMillis: number;
}

export interface FlatRun {
  avatar: string;
  persona: string;
  timestamp: number; // UTC Milliseconds

  lane: number; // 1 to N
  started: boolean;
  falseStart: boolean;
  timeMillis: number;

  // ORM methods
  asRun(): Promise<Run>;
}
