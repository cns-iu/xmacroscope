import { IField, Field } from '../../dino-core';
import {
  genderMapping, ageGroupMapping, handednessMapping,
  athleticismMapping, laneMapping, falseStartMapping
} from './mappings';

export interface FieldList<T> {
  default: IField<T>;
  [index: number]: IField<T>;
}

function makeFieldList<T>(fields: IField<T>[], defaultIndex: number = 0): FieldList<T> {
  // This should be a class but for some reason extending array did not work properly
  const result: FieldList<T> = fields.slice() as any;
  Object.defineProperties(result, {
    default: {
      get() {
        return this[defaultIndex];
      }
    }
  });

  return result;
}

const positionFields: IField<string | number>[] = [
  new Field<string>('persona.name', 'Person Name', undefined, undefined, 'string'),
  new Field<number>('timeMillis', 'Person Run Time', (item: any): number => {
    return item.timeMillis;
  }, (value: number) => value / 1000.0, 'number'),
  new Field<number>('avatar.timeMillis', 'Avatar Run Time', (item: any): number => {
    return item.avatar.timeMillis;
  }, (value: number) => value / 1000.0, 'number')
];
// Point position fields
export const defaultPointPositionFields = makeFieldList(positionFields);

// Color fields
const colorFields: IField<string>[] = [
  new Field('persona.color', 'Runner\'s Color'),
  new Field('persona.gender', 'Runner\'s Gender', undefined, genderMapping.makeMapper('color')),
  new Field('persona.age_group', 'Runner\'s Age Group', undefined, ageGroupMapping.makeMapper('color')),
  new Field('persona.handedness', 'Runner\'s Handedness', undefined, handednessMapping.makeMapper('color')),
  // Not available yet
  /*new Field('persona.athleticism', 'Runner\'s Athleticism', undefined, athleticismMapping.makeMapper('color')),*/
  new Field('lane', 'Runner\'s Lane', undefined, laneMapping.makeMapper('color')),
  new Field('falseStart', 'Runner made a false start', undefined, falseStartMapping.makeMapper('color'))
];

// Point color fields
export const defaultPointColorFields = makeFieldList(colorFields);

// Shape fields
const shapeFields: IField<string>[] = [
  new Field('fixed', 'Fixed Shape', () => 'circle'),
  new Field('persona.gender', 'Runner\'s Gender', undefined, genderMapping.makeMapper('shape')),
  new Field('persona.age_group', 'Runner\'s Age Group', undefined, ageGroupMapping.makeMapper('shape')),
  new Field('persona.handedness', 'Runner\'s Handedness', undefined, handednessMapping.makeMapper('shape')),
  // Not available yet
  /*new Field('persona.athleticism', 'Runner\'s Athleticism', undefined, athleticismMapping.makeMapper('shape')),*/
  new Field('lane', 'Runner\'s Lane', undefined, laneMapping.makeMapper('shape')),
  new Field('falseStart', 'Runner made a false start', undefined, falseStartMapping.makeMapper('shape'))
  // TODO
];

// Point shape fields
export const defaultPointShapeFields = makeFieldList(shapeFields);


const sizeFields: IField<number>[] = [
  new Field<number>('persona.age_group', 'Runner\'s Age Group', undefined,
    ageGroupMapping.makeMapper('size'))
];

// Point size fields
export const defaultPointSizeFields = makeFieldList(sizeFields);
