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
  new Field('position', 'Point Position', ({ persona: { latitude, longitude } }) => [latitude, longitude])
];

export const defaultPointPositionFields = makeFieldList(pointPositionFields);

// TODO: Add tooltips?
const tooltipFields: IField<string>[] = [
  new Field<string>('persona.name', 'Name', undefined, undefined, 'string'),
  new Field<string>('avatar.name', 'Avatar', undefined, undefined, 'string')
];

// TODO: Tooltip fields
export const defaultTooltipFields = makeFieldList(tooltipFields, 0);

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

// State color fields
export const defaultStateColorFields = makeFieldList(colorFields, 0);

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

// Size fields
const minArea = Math.pow(5, 2) * Math.PI;
const maxArea = Math.pow(20, 2) * Math.PI;
const areaDiff = maxArea - minArea;

const minRuntime = 2000;
const maxRuntime = 10000;
const runtimeDiff = maxRuntime - minRuntime;

const sizeFields: IField<number>[] = [
  new Field('fixed', 'Fixed Size', () => minArea),
  new Field('timeMillis', 'Run Time', undefined, (time: number): number => {
    const clampedTime = Math.min(maxRuntime, Math.max(minRuntime, time));
    const factor = (clampedTime - minRuntime) / runtimeDiff;
    const area = minArea + factor * areaDiff;

    return area;
  }),
  new Field<number>('avatar.runMillis', 'Avatar\'s Time', undefined,
    (value: number) => value / 1000.0, 'number'),
  new Field<number>('persona.age_group', 'Age Group', undefined,
    ageGroupMapping.makeMapper('size'))
  // TODO
];

// Point size fields
export const defaultPointSizeFields = makeFieldList(sizeFields, 1);
