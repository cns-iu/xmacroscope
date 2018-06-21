import { simpleField, Field} from '@ngx-dino/core';
import { access } from '@ngx-dino/core/src/operators/methods/extracting/access';
import { combine } from '@ngx-dino/core/src/operators/methods/grouping/combine';
import { chain } from '@ngx-dino/core/src/operators/methods/grouping/chain';
import { map } from '@ngx-dino/core/src/operators/methods/transforming/map';

import { ageGroupMapping } from './mappings';
import {
  FieldList,
  makeFieldList,
  nameFields,
  wrapFieldsForShowPersona
} from './common-fields';

export const stateFields = makeFieldList(
  [
    simpleField<string>({
    bfieldId: 'runnerState',
    label: 'Runner\'s State',

    operator: access('persona.state')
    })
  ]
, 0);

export const pointPositionFields = makeFieldList(
  [
    simpleField<[number, number]>({
      bfieldId: 'pointPosition',
      label: 'Point Position',

      operator: chain<any, [number, number]>(
        combine({
          latitude: access<number>('persona.latitude', 30),
          longitude: access<number>('persona.longitude', -80)
        }),
        map((latitude, longitude) => [latitude, longitude])
      )
    })
  ]
, 0);

// Tooltip fields
// const tooltipFields: any = defaultNameFields; // Additional fields can be added here

// Tooltip fields
export const tooltipFields = nameFields;

// Size fields
const minArea = Math.pow(5, 2) * Math.PI;
const maxArea = Math.pow(20, 2) * Math.PI;
const areaDiff = maxArea - minArea;

const minRuntime = 2000;
const maxRuntime = 10000;
const runtimeDiff = maxRuntime - minRuntime;

const fixedSizeField: Field<number> = simpleField<number>({
  bfieldId: 'fixedSize',
  label: 'Fixed Size',

  operator: map(() => minArea)
});

const runTimeField: Field<number> = simpleField<number>({
  bfieldId: 'runTime',
  label: 'Run Time',

  operator: chain(
    access('timeMillis', minArea),
    map((time) => {
      const clampedTime = Math.min(maxRuntime, Math.max(minRuntime, time));
      const factor = (clampedTime - minRuntime) / runtimeDiff;
      const area = minArea + factor * areaDiff;

      return area as number;
    })
  )
});

// Not available right now
const avatarTimeField: Field<number> = simpleField<number>({
  bfieldId: 'avatarsTime',
  label: 'Avatar\'s Time',

  operator: chain(
    access('avatar.runMillis', minArea),
    map((a: number) => a / 1000.0)
  )

});

const ageGroupField: Field<any> = simpleField({ // TODO typing
  bfieldId: 'ageGroup',
  label: 'Age Group',

  operator: chain(
    access('persona.age_group', minArea),
    map((g) => ageGroupMapping.makeMapper('size'))
  )
});

const sizeFields: Field<number>[] = [
  fixedSizeField,
  runTimeField,
  avatarTimeField,
  ageGroupField
];

const personaSizeField: Field<number> = simpleField<number>({
  bfieldId: 'showPersonaSize',
  label: 'Show Persona Size',

  operator: chain(
    access('timeMillis'), // TODO
    map(() => 200)
  )
});

// Point size fields
export const pointSizeFields = makeFieldList(sizeFields, 0);

wrapFieldsForShowPersona(personaSizeField, sizeFields);

export const pointIdField: Field<string> = simpleField<string>({
  bfieldId: 'computedPointId',
  label: 'Computed Point Id',

  operator: chain(
    combine({
      persona: access('persona'),
      latitude: access('persona.latitude', 30),
      longitude: access('persona.longitude', -80)
    }),
    map(({persona, latitude, longitude}) => {
      if (!persona || !latitude || !longitude) {
        return null;
      } else {
        return latitude + '+' + longitude;
      }
    })
  )
});
