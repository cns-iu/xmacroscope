import { areaSizeScale } from '@dvl-fw/core';
import { access, chain, combine, map, Operand, Operator } from '@ngx-dino/core';
import { assignIn, get, pick, round } from 'lodash';

import { Person } from './person';


function ifHighlighted<T>(trueAttr: string, falseAttr: string): Operator<any, T> {
  return map(s => s.highlighted ? get(s, trueAttr) : get(s, falseAttr));
}

// The time in which the application started
const startupTime = Date.now();

// @dynamic
export class Run {
  id: string;
  start: Date;
  end: Date;
  person: Person;
  highlighted = false;
  selected = false;
  pinned = false;

  constructor(data: {
    id?: string, start?: Date, end?: Date, person?: any, highlighted?: boolean, selected?: boolean, pinned?: boolean
  } = {}) {
    if (!(data.person instanceof Person)) {
      data.person = new Person(data.person || {});
    }
    Object.assign(this, pick(data, ['id', 'start', 'end', 'person', 'highlighted', 'selected', 'pinned']));
  }

  // Order by the number of milliseconds before the application was started
  @Operand(chain(access<Date>('end'), map<Date, number>(d => round(startupTime - d.getTime() + Math.random(), 2))))
  endOrder: number;

  @Operand(map<Run, string>(r => r.selected ? '#F9E5B6' : (r.pinned ? '#CCE0EA' : undefined )))
  tableRowColor: string;

  @Operand(map<Run, string>(r => r.pinned ? '#000000' : r.fixed.strokeColor ))
  fixedStrokeColor: string;

  @Operand(map(s => s.end && s.start ? s.end.getTime() - s.start.getTime() : undefined))
  timeMillis: number;
  @Operand(chain(access<number>('timeMillis'), map(t => t ? t / 1000 : undefined)))
  timeSeconds: number;
  @Operand(chain(access<number>('timeSeconds'), map(t => t ? Number(t).toFixed(2) : '')))
  timeLabel: string;
  @Operand(chain(access<number>('timeSeconds'), areaSizeScale.quantitative([0, 10])))
  timeAreaSize: number;

  @Operand(map<Run, any>(r => {
    return r.pinned ?
      { // For Opponents
        areaSize: 500,
        color: '#000000',
        strokeColor: '#000000',
        pulse: true,
        transparency: 0,
        strokeTransparency: 1,
        strokeWidth: 2,
        text: 'Fixed',
        shape: r.person.iconShape
      } :
      { // For Runners
        areaSize: 250,
        color: '#DEDAD7',
        strokeColor: '#83786F',
        pulse: true,
        transparency: 0.4,
        strokeTransparency: 0.3,
        strokeWidth: 2,
        text: 'Fixed',
        shape: 'circle'
      };
    }
  ))
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
