import { simpleField, prePostMultiField, DataType } from '@ngx-dino/core';
import { access, lookup, identity, map } from './field-utils';

export const id = simpleField<string>({
  id: 'avatar.id',
  label: 'Avatar ID',
  bfieldId: 'id',
  operator: access('avatar.id')
});

export const name = simpleField<string>({
  id: 'avatar.name',
  label: 'Avatar',
  bfieldId: 'name',
  operator: access('avatar.name', 'Unknown')
});

export const runMillis = simpleField<number>({
  bfieldId: 'runMillis',
  label: 'Avatar\'s Time',
  operator: access('avatar.runMillis', 1000)
});

export const AvatarFields = { id, name, runMillis };
