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
export const pointIDField = new Field<string>({
  name: 'race-id', label: 'Race ID',
  accessor: (item: any): string => item.raceTimestamp + item.persona.id
});

const positionFields: IField<string | number>[] = [
  new Field<string>({name: 'persona.name', label: 'Name'}),
  new Field<string>({name: 'avatar.name', label: 'Avatar'}),
  new Field({
    name: 'timeMillis', label: 'Run Time', datatype: 'number',
    transform: (value: number) => value / 1000.0
  }),
  new Field({
    name: 'avatar.runMillis', label: 'Avatar\'s Time', datatype: 'number',
    transform: (value: number) => value / 1000.0
  })
];
// Point position fields
export const defaultPointPositionFields = makeFieldList(positionFields);
export const defaultXField = positionFields[2];
export const defaultYField = positionFields[3];

// Color fields
const colorFields: IField<string>[] = [
  new Field({
    name: 'persona.color', label: 'Color', default: '#696969'
  }),
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


const sizeFields: IField<number>[] = [
  new Field({name: 'fixed', label: 'Fixed Size', accessor: () => 100}),
  new Field({
    name: 'persona.age_group', label: 'Age Group', default: 100,
    transform: ageGroupMapping.makeMapper('size')
  })
];

// Point size fields
export const defaultPointSizeFields = makeFieldList(sizeFields, 1);
