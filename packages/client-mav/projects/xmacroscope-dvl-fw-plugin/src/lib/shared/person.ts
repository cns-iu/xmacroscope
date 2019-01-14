import { areaSizeScale, greyScale } from '@dvl-fw/core';
import { access, chain, combine, constant, map, Operand } from '@ngx-dino/core';
import { assignIn } from 'lodash';

export const allShapes: string[] = ['circle', 'square', 'cross', 'diamond',
  'triangle-up', 'triangle-down', 'triangle-left', 'triangle-right', 'star'
];

export const shapes: string[] = ['square', 'cross', 'diamond', 'triangle-up', 'star'];
export const colors: string[] = ['#D36E44', '#D30706', '#0707D2', '#8E1BCE', '#D372D2',
  '#55D4D2', '#9B180F', '#33820D', '#D39827', '#D3D406'
];
export const ageGroups: string[] = ['Kid', 'Pre-Teen', 'Teen', 'Adult', 'Retired'];
export const favoriteActivities: string[] = ['Sports', 'Cooking', 'Art', 'Gaming', 'Other'];


// @dynamic
export class Person {
  id: string;
  // Unused
  name: string;
  icon: string;
  color: string;
  ageGroup: 'Kid' | 'Pre-Teen' | 'Teen' | 'Adult' | 'Retired';
  favoriteActivity: 'Sports' | 'Cooking' | 'Art' | 'Gaming' | 'Other';
  height: number;
  zipCode: string;
  state: string; // Derived from zipCode
  latitude: number;
  longitude: number;

  constructor(data: any = {}) {
    Object.assign(this, data);
  }

  @Operand(map<Person, string>(s => `${s.icon}`))
  label: string;

  @Operand(combine([access('latitude'), access('longitude')]))
  latlng: number[]; // Derived from zipCode

  @Operand(chain(access('height'), areaSizeScale.quantitative([36, 96])))
  heightAreaSize: number;

  @Operand(chain(access('ageGroup'), areaSizeScale.qualitative(ageGroups)))
  ageGroupAreaSize: number;

  @Operand(chain(access('favoriteActivity'), greyScale.qualitative(favoriteActivities)))
  favoriteActivityColor: string;

  // @Operand(blahif(access('showPersona'), access('color'), constant('grey')), false)
  // fixed: string;

  toJSON(): any {
    return assignIn({}, this);
  }
}
