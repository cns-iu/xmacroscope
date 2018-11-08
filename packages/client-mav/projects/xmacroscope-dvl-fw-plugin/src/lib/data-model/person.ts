import { areaSizeScale, greyScale } from '@dvl-fw/core';
import { access, chain, combine, constant, map, Operand } from '@ngx-dino/core';

export const allShapes: string[] = ['circle', 'square', 'cross', 'diamond',
  'triangle-up', 'triangle-down', 'triangle-left', 'triangle-right', 'star'
];

export const shapes: string[] = ['square', 'cross', 'diamond', 'triangle-up', 'star'];
export const colors: string[] = ['#D36E44', '#D30706', '#0707D2', '#8E1BCE', '#D372D2',
  '#55D4D2', '#9B180F', '#33820D', '#D39827', '#D3D406'
];
export const genders: string[] = ['male', 'female', 'other'];
export const ageGroups: string[] = ['Kid', 'Pre-Teen', 'Teen', 'Adult', 'Retired'];
export const favoriteActivities: string[] = ['Sports', 'Cooking', 'Art', 'Gaming', 'Other'];

export const maxLat = 49.3457868; // north lat
export const minLat = 24.7433195; // south lat
export const maxLng = -124.7844079; // west long
export const minLng = -66.9513812; // east long

// @dynamic
export class Person {
  id: string;
  // Unused
  name: string;
  gender: 'male' | 'female' | 'other';
  handedness: 'left' | 'right' | 'ambidextrous';
  siblings: number;
  // Used
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

  @Operand(combine([access('latitude'), access('longitude')]))
  latlng: number[]; // Derived from zipCode

  @Operand(chain(access('height'), areaSizeScale.quantitative([36, 96])))
  heightAreaSize: number;

  @Operand(chain(access('ageGroup'), areaSizeScale.qualitative(ageGroups)))
  ageGroupAreaSize: number;

  @Operand(chain(access('favoriteActivity'), greyScale.qualitative(favoriteActivities)))
  favoriteActivityColor: string;

  @Operand(chain(access<number>('time'), map(t => t ? Math.min(t / 1000.0, 10) : 0), areaSizeScale.quantitative([1, 10])))
  timeAreaSize: number;

  // @Operand(blahif(access('showPersona'), access('color'), constant('grey')), false)
  // fixed: string;
}

