import { Avatar } from './avatar';
import { Persona } from './persona';
import { RaceResult } from './aisl-messages';

/** This is the model for data that flows through MAV */
export interface RunData extends RaceResult {
  avatar: Avatar;
  persona: Persona;
  timestamp: Date;
  showPersona?: boolean;

  lane: number; // 1 to N
  started: boolean;
  falseStart: boolean;
  timeMillis: number;
}
