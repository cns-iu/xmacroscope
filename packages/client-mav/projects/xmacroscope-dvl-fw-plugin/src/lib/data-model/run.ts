import { identity, Operand } from '@ngx-dino/core';
import { Person } from './person';

// @dynamic
export class Run {
  person: Person;
  start: Date;
  end: Date;
  // personId: ID // TODO
  falseStart: boolean; // TODO
  @Operand<boolean>(identity())
  showPersona?: boolean;

  constructor(data: any) {
    Object.assign(this, data);
  }
}
