import { simpleField, Field } from '@ngx-dino/core';
import { access } from '@ngx-dino/core/src/operators/methods/extracting/access';
import { combine } from '@ngx-dino/core/src/operators/methods/grouping/combine';
import { chain } from '@ngx-dino/core/src/operators/methods/grouping/chain';
import { map } from '@ngx-dino/core/src/operators/methods/transforming/map';

import { ageGroupMapping } from './mappings';
import {
  makeFieldList,
  nameFields,
  wrapFieldsForShowPersona
} from './common-fields';


// not user facing
export const pointIdField = simpleField<string>({
  bfieldId: 'id',
  label: 'Race ID',

  operator: chain(
    combine({
      raceTimestamp: access('timestamp'),
      personaId: access('persona.id')
    }),
    map((x: any) => (x.raceTimestamp + x.personaId).toString())
  )
});

const runnerPositionField: Field<number> = simpleField<number>({
  bfieldId: 'timeMillis',
  label: 'Run Time',

  operator: chain(access<number>('timeMillis'), map((t: number) => t / 1000.0))
});

// Not available right now
const  avatarPositionField: Field<number> = simpleField<number>({
  bfieldId: 'avatarTimeMillis',
  label: 'Avatar\'s Time',

  operator: chain(access<number>('avatar.runMillis'), map((t: number) => t / 1000.0))
});

const positionFields = [].concat(nameFields, runnerPositionField, avatarPositionField);

// Point position fields
export const pointPositionFields = makeFieldList(positionFields); // TODO
export const defaultXField = positionFields[2];
export const defaultYField = positionFields[3];

const fixedSizeField: Field<number> = simpleField<number>({
  bfieldId: 'fixedSize',
  label: 'Fixed Size',

  operator: map(() => 100)
});

const ageGroupSize: Field<any> = simpleField({ // TODO typing
  bfieldId: 'ageGroup',
  label: 'Age Group',

  operator: chain(
    access('persona.age_group', 1),
    map((a) => ageGroupMapping.makeMapper('size'))
  )
});

const sizeFields: Field<number>[] = [fixedSizeField, ageGroupSize];

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


