import { Field, simpleField, prePostMultiField, DataType } from '@ngx-dino/core';
import { access, lookup, identity, map, constant, persona } from './field-utils';

export const id = simpleField<string>({
  id: 'persona.id',
  label: 'Persona ID',
  bfieldId: 'id',
  operator: access('persona.id')
});

export const name = simpleField<string>({
  id: 'persona.name',
  label: 'Name',
  bfieldId: 'name',
  operator: access('persona.name', 'Unknown')
});

export const icon = simpleField<string>({
  id: 'persona.icon',
  label: 'Icon',
  bfieldId: 'shape',
  operator: access('persona.icon', 'Unknown')
});

export const color = simpleField<string>({
  id: 'persona.color',
  label: 'Color',
  bfieldId: 'color',
  operator: access('persona.color', '#696969')
});

export const gender = prePostMultiField({
  id: 'persona.gender',
  label: 'Gender',
  dataType: DataType.String,
  pre: access<string>('persona.gender'),
  post: identity(),
  mapping: {
    'shape': lookup<string>({
      'male': 'square',
      'female': 'diamond',
      'other': 'triangle-down'
    }, 'circle'),
    'color': lookup<string>({
      'male': 'blue',
      'female': 'pink',
      'other': 'purple'
    }, 'black')
  }
});

export const handedness = prePostMultiField({
  id: 'persona.handedness',
  label: 'Handedness',
  dataType: DataType.String,
  pre: access<string>('persona.handedness'),
  post: identity(),
  mapping: {
    'shape': lookup<string>({
      'right': 'triangle-right',
      'left': 'triangle-left'
    }, 'circle'),
    'color': lookup<string>({
      'right': 'gold',
      'left': 'brown'
    }, 'black'),
  }
});

export const state = simpleField<string>({
  id: 'persona.state',
  label: 'State',
  bfieldId: 'state',
  operator: access('persona.state', 'Unknown')
});

export const location = simpleField<number[]>({
  id: 'persona.location',
  label: 'Location',
  bfieldId: 'location',
  operator: map((item) => [item.latitude, item.longitude], [30, -80])
});


export const height = prePostMultiField({
  id: 'persona.height',
  label: 'Height',
  dataType: DataType.Number,
  pre: access<number>('persona.height'),
  post: identity(),
  mapping: {
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
  }
});

export const siblings = prePostMultiField({
  id: 'persona.siblings',
  label: 'Siblings',
  dataType: DataType.Number,
  pre: access<string>('persona.siblings'),
  post: identity(),
  mapping: {
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
  }
});

export const ageGroup = prePostMultiField({
  id: 'persona.age_group',
  label: 'Age Group',
  dataType: DataType.String,
  pre: access<string>('persona.age_group'),
  post: identity(),
  mapping: {
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
  }
});

export const zipcode = simpleField<string>({
  id: 'persona.zipcode',
  label: 'Zip Code',
  bfieldId: 'zipcode',
  operator: access('persona.zipcode', 'Unknown')
});

export const PersonaFields = { id, persona, icon, color,
  siblings, height, zipcode, state, location,

  // Below are doing away
  name, gender, age_group: ageGroup, handedness
};
