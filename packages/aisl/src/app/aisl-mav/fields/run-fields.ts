import { simpleField, prePostMultiField, Field, DataType } from '@ngx-dino/core';
import {
  access,
  map,
  lookup,
  identity,
  constant,
  mappingWithDefault,
  greyscale
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
    'size': constant(10),
    'color': constant('#cccccc'),
    'strokeColor': constant('#bebebe'),
    'stateColor': constant('#ffffff'),
    'pulse': constant(false),
    'undefined': constant(undefined)
  }, 'label')
});

export const lane = simpleField<number>({
  id: 'lane',
  label: 'Run Lane',
  bfieldId: 'size',
  operator: access('lane', 1)
});

export const timeMillis = prePostMultiField({
  id: 'timeMillis',
  label: 'Time (seconds)',
  dataType: DataType.Number,
  pre: map<any, number>((n) => (n.timeMillis || 0) / 1000.0),
  post: identity(),
  mapping: mappingWithDefault({
    'axis': identity(),
    'color': greyscale.quantitative([0, 6], 0), // domain = 0 - 6 ms TBD TODO
    'strokeColor': greyscale.quantitative([0, 6], 10), // domain = 0 - 6 ms TBD TODO
    'size': lookup<number>({
      '07-09': 66,
      '10-12': 77,
      '13-18': 88,
      '19-30': 99,
      '31-40': 110,
      '41-50': 121,
      '51-60': 132,
      '61-70': 143,
      '70+': 155
    }, 10),
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
