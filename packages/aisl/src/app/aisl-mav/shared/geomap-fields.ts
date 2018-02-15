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

// State fields
const stateFields: IField<string>[] = [
  new Field('persona.state', 'Runner\'s State')
];

export const defaultStateFields = makeFieldList(stateFields);

// Point position fields
const pointPositionFields: IField<[number, number]>[] = [
  new Field('position', 'Point Position', ({persona: {latitude, longitude}}) => [latitude, longitude])
];

export const defaultPointPositionFields = makeFieldList(pointPositionFields);

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

// State color fields
export const defaultStateColorFields = makeFieldList(colorFields, 1);

// Point color fields
export const defaultPointColorFields = makeFieldList(colorFields);

// Shape fields
const shapeFields: IField<string>[] = [
  new Field('fixed', 'Fixed Shape', () => 'circle')
  // TODO
];

// Point shape fields
export const defaultPointShapeFields = makeFieldList(shapeFields);

// Size fields
const minArea = Math.pow(5, 2) * Math.PI;
const maxArea = Math.pow(20, 2) * Math.PI;
const areaDiff = maxArea - minArea;

const minRuntime = 2000;
const maxRuntime = 10000;
const runtimeDiff = maxRuntime - minRuntime;

const sizeFields: IField<number>[] = [
  new Field('fixed', 'Fixed Size', () => minArea),
  new Field('timeMillis', 'Size of Runner\'s Runtime', undefined, (time: number): number => {
    const clampedTime = Math.min(maxRuntime, Math.max(minRuntime, time));
    const factor = (clampedTime - minRuntime) / runtimeDiff;
    const area = minArea + factor * areaDiff;

    return area;
  })
  // TODO
];

// Point size fields
export const defaultPointSizeFields = makeFieldList(sizeFields);
