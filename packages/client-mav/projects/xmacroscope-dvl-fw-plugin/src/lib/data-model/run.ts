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
  @Operand(chain(access<number>('timeMillis'), map(t => t ? t / 1000 : undefined)))
  timeSeconds: number;
  @Operand(chain(access<number>('timeSeconds'), map(t => t ? Number(t).toFixed(2) : '')))
  timeLabel: string;
  @Operand(chain(access<number>('timeSeconds'), areaSizeScale.quantitative([1, 10])))
  timeAreaSize: number;


  toJSON(): any {
    return Object.assign({
      id: this.id,
      start: this.start ? this.start.toISOString() : undefined,
      end: this.end ? this.end.toISOString() : undefined,
      person: this.person.toJSON(),
    }, pick(this,
      // Derived graphic variable data
      ['timeMillis', 'timeSeconds', 'timeLabel', 'timeAreaSize']
    ));
  }
}
