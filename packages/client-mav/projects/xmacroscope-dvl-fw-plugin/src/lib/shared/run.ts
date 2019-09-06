import { assignIn, get, pick } from 'lodash';
import { Operand, map, constant, chain, access, combine, Operator } from '@ngx-dino/core';
import { areaSizeScale } from '@dvl-fw/core';

import { Person } from './person';


function ifHighlighted<T>(trueAttr: string, falseAttr: string): Operator<any, T> {
  return map(s => s.highlighted ? get(s, trueAttr) : get(s, falseAttr));
}

// @dynamic
export class Run {
  id: string;
  start: Date;
  end: Date;
  person: Person;
  highlighted = false;
  selected = false;

  constructor(data: {
    id?: string, start?: Date, end?: Date, person?: any, highlighted?: boolean, selected?: boolean
  } = {}) {
    if (!(data.person instanceof Person)) {
      data.person = new Person(data.person || {});
    }
    Object.assign(this, pick(data, ['id', 'start', 'end', 'person', 'highlighted', 'selected']));
  }

  @Operand(map(s => s.end && s.start ? s.end.getTime() - s.start.getTime() : undefined))
  timeMillis: number;
  @Operand(chain(access<number>('timeMillis'), map(t => t ? t / 1000 : undefined)))
  timeSeconds: number;
  @Operand(chain(access<number>('timeSeconds'), map(t => t ? Number(t).toFixed(2) : '')))
  timeLabel: string;
  @Operand(chain(access<number>('timeSeconds'), areaSizeScale.quantitative([1, 10])))
  timeAreaSize: number;

  @Operand(constant({
    areaSize: 250,
    color: '#83786F',
    pulse: true,
    transparency: 0.8,
    strokeTransparency: 0.5,
    strokeWidth: 1,
    text: 'Fixed',
    shape: 'circle'
  }))
  fixed: any;

  @Operand(combine({shape: access('person.icon'), color: access('fixed.color')}))
  persona: {shape: string, color: string};

  toJSON(): any {
    return Object.assign(assignIn({}, this), {
      id: this.id,
      start: this.start ? this.start.toISOString() : undefined,
      end: this.end ? this.end.toISOString() : undefined,
      person: this.person.toJSON(),
    });
  }
}
