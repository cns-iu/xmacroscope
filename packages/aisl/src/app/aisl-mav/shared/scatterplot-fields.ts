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
// not user facing
export const pointIDField = new Field<string>('race-id', 'Race ID', (item: any): string => {
  return item.raceTimestamp + item.persona.id;
}, undefined, 'string');

const positionFields: IField<string | number>[] = [
  new Field<string>('persona.name', 'Name', undefined, undefined, 'string'),
  new Field<string>('avatar.name', 'Avatar', undefined, undefined, 'string'),
  new Field<number>('timeMillis', 'Run Time', undefined,
    (value: number) => value / 1000.0, 'number'),
  new Field<number>('avatar.runMillis', 'Avatar\'s Time', undefined,
    (value: number) => value / 1000.0, 'number')
];
// Point position fields
export const defaultPointPositionFields = makeFieldList(positionFields);
export const defaultXField = positionFields[2];
export const defaultYField = positionFields[3];

// Color fields
const colorFields: IField<string>[] = [
  new Field('persona.color', 'Color'),
  new Field('persona.gender', 'Gender', undefined, genderMapping.makeMapper('color')),
  new Field('persona.age_group', 'Age Group', undefined, ageGroupMapping.makeMapper('color')),
  new Field('persona.handedness', 'Handedness', undefined, handednessMapping.makeMapper('color')),
  // Not available yet
  /*new Field('persona.athleticism', 'Runner\'s Athleticism', undefined, athleticismMapping.makeMapper('color')),*/
  new Field('lane', 'Run Lane', undefined, laneMapping.makeMapper('color')),
  new Field('falseStart', 'False Start', undefined, falseStartMapping.makeMapper('color'))
];

// Point color fields
export const defaultPointColorFields = makeFieldList(colorFields, 1);

// Shape fields
const shapeFields: IField<string>[] = [
  new Field('fixed', 'Fixed Shape', () => 'circle'),
  new Field('persona.gender', 'Gender', undefined, genderMapping.makeMapper('shape')),
  new Field('persona.age_group', 'Age Group', undefined, ageGroupMapping.makeMapper('shape')),
  new Field('persona.handedness', 'Handedness', undefined, handednessMapping.makeMapper('shape')),
  // Not available yet
  /*new Field('persona.athleticism', 'Runner\'s Athleticism', undefined, athleticismMapping.makeMapper('shape')),*/
  new Field('lane', 'Run Lane', undefined, laneMapping.makeMapper('shape')),
  new Field('falseStart', 'False Start', undefined, falseStartMapping.makeMapper('shape'))
  // TODO
];

// Point shape fields
export const defaultPointShapeFields = makeFieldList(shapeFields, 3);


const sizeFields: IField<number>[] = [
  new Field('fixed', 'Fixed Size', () => 100),
  new Field<number>('persona.age_group', 'Age Group', undefined,
    ageGroupMapping.makeMapper('size'))
];

// Point size fields
export const defaultPointSizeFields = makeFieldList(sizeFields, 1);
