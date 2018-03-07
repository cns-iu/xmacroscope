import { IField, Field } from '@ngx-dino/core';
import {
  genderMapping, ageGroupMapping, handednessMapping,
  athleticismMapping, laneMapping, falseStartMapping
} from './mappings';

export interface FieldList<T> extends Array<IField<T>> {
  default: IField<T>;
}

export function makeFieldList<T>(
  fields: IField<T>[], defaultIndex: number = 0
): FieldList<T> {
  // This should be a class but typescript can not transpile super calls to
  // builtins correctly. Therefore we cannot extend Array. See:
  // https://github.com/Microsoft/TypeScript/wiki/FAQ#why-doesnt-extending-built-ins-like-error-array-and-map-work
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
];

// Point shape fields
export const defaultPointShapeFields = makeFieldList(shapeFields, 3);
