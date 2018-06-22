import { simpleField, prePostMultiField, Field, DataType } from '@ngx-dino/core';
import { access, lookup, identity, map, constant, autoId } from './field-utils';

import { AvatarFields } from './avatar-fields';
import { PersonaFields } from './persona-fields';

export const id = simpleField<any>({
  id: 'run.id',
  label: 'Run ID',
  bfieldId: 'id',
  operator: autoId('runData.')
});

export const fixed = new Field<any>({
  id: 'fixed',
  label: 'Fixed',
  dataType: DataType.String,
  mapping: {
    'shape': constant('circle'),
    'size': constant(10),
    'color': constant('#cccccc'),
    'stateColor': constant('#ffffff')
  }
});

export const lane = simpleField<number>({
  id: 'lane',
  label: 'Run Lane',
  bfieldId: 'size',
  operator: access('lane', 1)
});

export const timeMillis = simpleField<number>({
  id: 'timeMillis',
  label: 'Run Time',
  bfieldId: 'size',
  operator: access('timeMillis', 1)
});

export const RunFields = {
  id,
  avatar: AvatarFields,
  persona: PersonaFields,
  lane,
  timeMillis,
  fixed
};
