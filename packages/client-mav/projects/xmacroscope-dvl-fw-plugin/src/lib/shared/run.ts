import { areaSizeScale } from '@dvl-fw/core';
import { access, chain, combine, map, Operand } from '@ngx-dino/core';
import { assignIn, round } from 'lodash';

import { Person, PersonOptions } from './person';

export interface RunOptions {
  id: string;
  start: Date;
  end: Date;
  person: Person | PersonOptions;
  highlighted?: boolean;
  selected?: boolean;
  pinned?: boolean;
}


// The time in which the application started
const startupTime = Date.now();


const fixedOpponentDef = {
  areaSize: 500,
  color: '#000000',
  strokeColor: '#000000',
  pulse: true,
  transparency: 0,
  strokeTransparency: 1,
  strokeWidth: 2,
  text: 'Fixed'
};

const fixedRunnerDef = {
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


function getEndTime(date: Date): number {
  const jitter = Math.random();
  return round(startupTime - date.getTime() + jitter, 2);
}


export class Run {
  id: string;
  start: Date;
  end: Date;
  person: Person;
  highlighted: boolean;
  selected: boolean;
  pinned: boolean;

  // Order by the number of milliseconds before the application was started
  @Operand(chain(access<Date>('end'), map(getEndTime)))
  endOrder!: number;

  @Operand(map<Run, string>(r => r.selected ? '#F9E5B6' : (r.pinned ? '#CCE0EA' : '')))
  tableRowColor!: string;

  @Operand(map<Run, string>(r => (r.fixed as { strokeColor: string }).strokeColor))
  fixedStrokeColor!: string;

  @Operand(map<Run, number | undefined>(s => s.end && s.start ? s.end.getTime() - s.start.getTime() : undefined))
  timeMillis!: number;
  @Operand(chain(access<number>('timeMillis'), map(t => t ? t / 1000 : undefined)))
  timeSeconds!: number;
  @Operand(chain(access<number>('timeSeconds'), map(t => t?.toFixed?.(2) ?? '')))
  timeLabel!: string;
  @Operand(chain(access<number>('timeSeconds'), areaSizeScale.quantitative([0, 10])))
  timeAreaSize!: number;

  @Operand(map<Run, unknown>(r => r.pinned ?
    { shape: r.person.iconShape, ...fixedOpponentDef } : { ...fixedRunnerDef }
  ))
  fixed!: unknown;

  @Operand(combine({ shape: access('person.icon'), color: access('fixed.color') }))
  persona!: { shape: string; color: string };

  constructor(options: RunOptions) {
    const {
      person,

      // Can be moved into destructuring assignment when this bug is fixed
      // https://github.com/microsoft/TypeScript/issues/37693
      highlighted = false,
      selected = false,
      pinned = false
    } = options;

    ({
      id: this.id,
      start: this.start,
      end: this.end
    } = options);

    this.highlighted = highlighted;
    this.selected = selected;
    this.pinned = pinned;

    this.person = person instanceof Person ? person : new Person(person);
  }

  toJSON(): unknown {
    return Object.assign(assignIn({}, this), {
      id: this.id,
      start: this.start ? this.start.toISOString() : undefined,
      end: this.end ? this.end.toISOString() : undefined,
      person: this.person.toJSON(),
    });
  }
}
