import { assignIn, get, pick } from 'lodash';
import { Operand, map, constant, chain, access, combine, Operator } from '@ngx-dino/core';
import { areaSizeScale } from '@dvl-fw/core';

import { Person } from './person';

function ifShowPersona<T>(trueAttr: string, falseAttr: string): Operator<any, T> {
  return map(s => s.showPersona ? get(s, trueAttr) : get(s, falseAttr));
}

// @dynamic
export class Run {
  id: string;
  start: Date;
  end: Date;
  person: Person;
  showPersona = false;
  selected = false;

  constructor(data: {
    id?: string, start?: Date, end?: Date, person?: any, showPersona?: boolean, selected?: boolean
  } = {}) {
    if (!(data.person instanceof Person)) {
      data.person = new Person(data.person || {});
    }
    Object.assign(this, pick(data, ['id', 'start', 'end', 'person', 'showPersona', 'selected']));
  }

  @Operand(map(s => s.end && s.start ? s.end.getTime() - s.start.getTime() : undefined))
  timeMillis: number;
  @Operand(chain(access<number>('timeMillis'), map(t => t ? t / 1000 : undefined)))
  timeSeconds: number;
  @Operand(chain(access<number>('timeSeconds'), map(t => t ? Number(t).toFixed(2) : '')))
  timeLabel: string;
  @Operand(chain(access<number>('timeSeconds'), areaSizeScale.quantitative([1, 10])))
  timeAreaSize: number;

  @Operand(ifShowPersona('fixed.areaSize', 'timeAreaSize'), false)
  showPersonaTimeAreaSize: number;
  @Operand(ifShowPersona('fixed.areaSize', 'person.heightAreaSize'), false)
  showPersonaHeightAreaSize: number;
  @Operand(ifShowPersona('fixed.areaSize', 'person.ageGroupAreaSize'), false)
  showPersonaAgeGroupAreaSize: number;
  @Operand(ifShowPersona('persona.color', 'person.favoriteActivityColor'), false)
  showPersonaFavoriteActivityColor: number;

  @Operand(ifShowPersona('persona.color', 'fixed.color'), false)
  showPersonaFixedColor: number;
  @Operand(ifShowPersona('persona.shape', 'fixed.shape'), false)
  showPersonaFixedShape: number;
  @Operand(ifShowPersona('persona.color', 'fixed.areaSize'), false)
  showPersonaFixedAreaSize: number;
  @Operand(ifShowPersona('fixed.strokeTransparency', 'fixed.transparency'), false)
  showPersonaFixedTransparency: number;

  @Operand(constant({
    areaSize: 250,
    color: '#000000',
    pulse: true,
    transparency: 0.6,
    strokeTransparency: 0.2,
    strokeWidth: 1,
    text: 'Fixed',
    shape: 'circle'
  }))
  fixed: any;

  @Operand(combine({shape: access('person.icon'), color: access('person.color')}))
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
