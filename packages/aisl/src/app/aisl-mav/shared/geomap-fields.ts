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
  new Field({name: 'persona.state', label: 'Runner\'s State'})
];

export const defaultStateFields = makeFieldList(stateFields);

// Point position fields
const pointPositionFields: IField<[number, number]>[] = [
  new Field({
    name: 'position', label: 'Point Position',
    accessor: ({ persona: { latitude, longitude } }) => [latitude, longitude]
  })
];

export const defaultPointPositionFields = makeFieldList(pointPositionFields);

// TODO: Add tooltips?
const tooltipFields: IField<string>[] = [
  new Field<string>({
    name: 'persona.name', label: 'Name', default: 'Unknown persona'
  }),
  new Field<string>({
    name: 'avatar.name', label: 'Avatar', default: 'Unknown avatar'
  })
];

// TODO: Tooltip fields
export const defaultTooltipFields = makeFieldList(tooltipFields, 0);

// Color fields
const colorFields: IField<string>[] = [
  new Field({name: 'persona.color', label: 'Color', default: '#696969'}),
  new Field({
    name: 'persona.gender', label: 'Gender', default: '#696969',
    transform: genderMapping.makeMapper('color')
  }),
  new Field({
    name: 'persona.age_group', label: 'Age Group', default: '#696969',
    transform: ageGroupMapping.makeMapper('color')
  }),
  new Field({
    name: 'persona.handedness', label: 'Handedness', default: '#696969',
    transform: handednessMapping.makeMapper('color')
  }),
  // Not available yet
  /*new Field({
    name: 'persona.athleticism', label: 'Runner\'s Athleticism',
    default: '#696969', transform: athleticismMapping.makeMapper('color')
  }),*/
  new Field({
    name: 'lane', label: 'Run Lane', default: '#696969',
    transform: laneMapping.makeMapper('color')
  }),
  new Field({
    name: 'falseStart', label: 'False Start', default: '#696969',
    transform: falseStartMapping.makeMapper('color')
  })
];

// State color fields
export const defaultStateColorFields = makeFieldList(colorFields, 0);

// Point color fields
export const defaultPointColorFields = makeFieldList(colorFields, 1);

// Shape fields
const shapeFields: IField<string>[] = [
  new Field({
    name: 'fixed', label: 'Fixed Shape', accessor: () => 'square'
  }),
  new Field({
    name: 'persona.gender', label: 'Gender', default: 'circle',
    transform: genderMapping.makeMapper('shape')
  }),
  new Field({
    name: 'persona.age_group', label: 'Age Group', default: 'circle',
    transform: ageGroupMapping.makeMapper('shape')
  }),
  new Field({
    name: 'persona.handedness', label: 'Handedness', default: 'circle',
    transform: handednessMapping.makeMapper('shape')
  }),
  // Not available yet
  /*new Field({
    name: 'persona.athleticism', label: 'Runner\'s Athleticism',
    default: 'circle', transform: athleticismMapping.makeMapper('shape')
  }),*/
  new Field({
    name: 'lane', label: 'Run Lane', default: 'circle',
    transform: laneMapping.makeMapper('shape')
  }),
  new Field({
    name: 'falseStart', label: 'False Start', default: 'circle',
    transform: falseStartMapping.makeMapper('shape')
  })
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
  new Field({name: 'fixed', label: 'Fixed Size', accessor: () => minArea}),
  new Field({
    name: 'timeMillis', label: 'Run Time', default: minArea,
    transform: (time: number): number => {
      const clampedTime = Math.min(maxRuntime, Math.max(minRuntime, time));
      const factor = (clampedTime - minRuntime) / runtimeDiff;
      const area = minArea + factor * areaDiff;

      return area;
    }
  }),
  new Field<number>({
    name: 'avatar.runMillis', label: 'Avatar\'s Time', default: minArea,
    datatype: 'number', transform: (value: number) => value / 1000.0
  }),
  new Field<number>({
    name: 'persona.age_group', label: 'Age Group', default: minArea,
    transform: ageGroupMapping.makeMapper('size')
  })
  // TODO
];

// Point size fields
export const defaultPointSizeFields = makeFieldList(sizeFields, 1);

// Computed fields - not user facing.
export const pointIdField = new Field<string>({
  name: 'id', label: 'Computed Point Id',
  accessor: (data: Partial<any>): string => {
    if (!data.persona.latitude || !data.persona.longitude) {
      return null;
    } else {
      return data.persona.latitude + '+' + data.persona.longitude;
    }
  }
});
