import { IField, Field } from '@ngx-dino/core';

import {
  genderMapping, ageGroupMapping, handednessMapping,
  athleticismMapping, laneMapping, falseStartMapping
} from './mappings';
import {
  makeFieldList,
  defaultNameFields
} from './common-fields';

// State fields
const stateFields: IField<string>[] = [
  new Field({name: 'persona.state', label: 'Runner\'s State'})
];

export const defaultStateFields = makeFieldList(stateFields);

// Point position fields
const pointPositionFields: IField<[number, number]>[] = [
  new Field<[number, number]>({
    name: 'position', label: 'Point Position', default: [30, -80],
    accessor: (item: any) => {
      if (!item.persona || !item.persona.latitude || !item.persona.longitude) {
        return null;
      } else {
        return [item.persona.latitude, item.persona.longitude];
      }
    }
  })
];

export const defaultPointPositionFields = makeFieldList(pointPositionFields);

// Tooltip fields
const tooltipFields: IField<string>[] = [].concat(defaultNameFields, [
  // Additional fields goes here
]);

// Tooltip fields
export const defaultTooltipFields = makeFieldList(tooltipFields, 0);


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
];

// Point size fields
export const defaultPointSizeFields = makeFieldList(sizeFields, 1);

// Computed fields - not user facing.
export const pointIdField = new Field<string>({
  name: 'id', label: 'Computed Point Id', default: '30+-80',
  accessor: (data: Partial<any>): string => {
    if (!data.persona || !data.persona.latitude || !data.persona.longitude) {
      return null;
    } else {
      return data.persona.latitude + '+' + data.persona.longitude;
    }
  }
});
