import { pick } from 'lodash';
import { Operand, map, chain, access } from '@ngx-dino/core';
import { areaSizeScale } from '@dvl-fw/core';

import { Person } from './person';


// @dynamic
export class Run {
  id: string;
  start: Date;
  end: Date;
  person: Person;

  constructor(data: {
    id?: string, start?: Date, end?: Date, person?: any
  } = {}) {
    if (!(data.person instanceof Person)) {
      data.person = new Person(data.person || {});
    }
    Object.assign(this, pick(data, ['id', 'start', 'end', 'person']));
  }

  @Operand(map(s => s.end && s.start ? s.end.getTime() - s.start.getTime() : undefined))
  timeMillis: number;

  @Operand(chain(access<number>('timeMillis'), map(t => t ? Math.min(t / 1000.0, 10) : 0), areaSizeScale.quantitative([1, 10])))
  timeMillisAreaSize: number;

  toJSON(): any {
    return Object.assign({
      id: this.id,
      start: this.start ? this.start.toISOString() : undefined,
      end: this.end ? this.end.toISOString() : undefined,
      person: this.person.toJSON(),
    }, pick(this,
      // Derived graphic variable data
      ['timeMillis', 'timeMillisAreaSize']
    ));
  }
}
