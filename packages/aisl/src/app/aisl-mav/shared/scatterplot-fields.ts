import { IField, Field } from '@ngx-dino/core';

import {
  genderMapping, ageGroupMapping, handednessMapping,
  athleticismMapping, laneMapping, falseStartMapping
} from './mappings';
import {
  makeFieldList,
  defaultNameFields,
  wrapFieldsForShowPersona
} from './common-fields';


// not user facing
export const pointIDField = new Field<string>({
  name: 'race-id', label: 'Race ID',
  accessor: (item: any): string => item.raceTimestamp + item.persona.id
});

const positionFields: IField<string | number>[] = [].concat(defaultNameFields, [
  new Field({
    name: 'timeMillis', label: 'Run Time', datatype: 'number', default: 0,
    transform: (value: number) => value / 1000.0
  }),
  new Field({
    name: 'avatar.runMillis', label: 'Avatar\'s Time', datatype: 'number',
    default: 0, transform: (value: number) => value / 1000.0
  })
]);
// Point position fields
export const defaultPointPositionFields = makeFieldList(positionFields);
export const defaultXField = positionFields[2];
export const defaultYField = positionFields[3];


const sizeFields: IField<number>[] = [
  new Field({name: 'fixed', label: 'Fixed Size', accessor: () => 100}),
  new Field({
    name: 'persona.age_group', label: 'Age Group', default: 100,
    transform: ageGroupMapping.makeMapper('size')
  })
];
const personaSizeField = new Field({
  name: 'persona.size', label: 'Show Persona Size', accessor: (item) => 200
});
wrapFieldsForShowPersona(personaSizeField, sizeFields);

// Point size fields
export const defaultPointSizeFields = makeFieldList(sizeFields, 1);