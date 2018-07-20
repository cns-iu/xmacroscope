import { simpleField, prePostMultiField, Field, DataType } from '@ngx-dino/core';
import {
  access,
  map,
  identity,
  constant,
  mappingWithDefault,
  greyscale,
  sizescale
} from './field-utils';

import { AvatarFields } from './avatar-fields';
import { PersonaFields } from './persona-fields';

export const id = simpleField<any>({
  id: 'run.id',
  label: 'Run ID',
  bfieldId: 'id',
  operator: map<any, string>((item) => item ? item.timestamp + ':' + item.lane : undefined)
});

export const fixed = new Field<any>({
  id: 'fixed',
  label: 'Fixed',
  dataType: DataType.String,
  mapping: mappingWithDefault({
    'label': constant('Fixed'),
    'shape': constant('circle'),
    'size': constant(50),
    'color': constant('#bdbdbd'),
    'strokeColor': constant('#8a8a8a'),
    'stateColor': constant('#ffffff'),
    'pulse': constant(false),
    'undefined': constant(undefined)
  }, 'label')
});

// Not in use right now
export const lane = simpleField<number>({
  id: 'lane',
  label: 'Run Lane',
  bfieldId: 'size',
  operator: access('lane', 1)
});

// quantitative property
export const timeMillis = prePostMultiField({
  id: 'timeMillis',
  label: 'Time (seconds)',
  dataType: DataType.Number,
  pre: map<any, number>((n) => (n.timeMillis || 0) / 1000.0),
  post: identity(),
  mapping: mappingWithDefault({
    'axis': identity(),
    'size': sizescale.quantitative([1, 10]),
    'sizeInput': identity()
  }, 'axis')
});

export const pulse = simpleField<boolean>({
  id: 'pulse',
  label: 'Pulse',
  bfieldId: 'pulse',
  operator: access('pulse', false)
});

export const RunFields = {
  id,
  avatar: AvatarFields,
  persona: PersonaFields,
  lane,
  timeMillis,
  pulse,
  fixed
};
