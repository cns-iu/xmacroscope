import { simpleField, prePostMultiField, Field, DataType } from '@ngx-dino/core';
import { access, map, lookup, identity, constant, mappingWithDefault } from './field-utils';

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
  label: 'Run Time',
  dataType: DataType.Number,
  pre: access<number>('timeMillis', 1),
  post: identity(),
  mapping: mappingWithDefault({
    'axis': identity(),
    'color': lookup<string>({
      '07-09': '#7fc97f',
      '10-12': '#beaed4',
      '13-18': '#fdc086',
      '19-30': '#ffff99',
      '31-40': '#386cb0',
      '41-50': '#f0027f',
      '51-60': '#bf5b17',
      '61-70': '#666666',
      '70+': '#17becf'
    }, '#bcbd22'),
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

export const RunFields = {
  id,
  avatar: AvatarFields,
  persona: PersonaFields,
  lane,
  timeMillis,
  fixed
};
