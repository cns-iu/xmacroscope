import { simpleField, prePostMultiField, DataType } from '@ngx-dino/core';
import {
  access,
  combine,
  lookup,
  identity,
  persona,
  mappingWithDefault,
  greyscale,
  sizescale
} from './field-utils';

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
  operator: access('persona.color', '#bdbdbd')
});

// Not in use right now
export const gender = prePostMultiField({
  id: 'persona.gender',
  label: 'Gender',
  dataType: DataType.String,
  pre: access<string>('persona.gender'),
  post: identity(),
  mapping: mappingWithDefault({
    'label': identity(),
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
  }, 'label')
});

// Not in use right now
export const handedness = prePostMultiField({
  id: 'persona.handedness',
  label: 'Handedness',
  dataType: DataType.String,
  pre: access<string>('persona.handedness'),
  post: identity(),
  mapping: mappingWithDefault({
    'label': identity(),
    'shape': lookup<string>({
      'right': 'triangle-right',
      'left': 'triangle-left'
    }, 'circle'),
    'color': lookup<string>({
      'right': 'gold',
      'left': 'brown'
    }, 'black'),
  }, 'label')
});

// Not in use right now
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
  operator: combine<any, number[]>([
      access<number>('persona.latitude', 30),
      access<number>('persona.longitude', -80)
  ])
});

// quantitative property
export const height = prePostMultiField({
  id: 'persona.height',
  label: 'Height (inches)',
  dataType: DataType.Number,
  pre: access<number>('persona.height', 36),
  post: identity(),
  mapping: mappingWithDefault({
    'axis': identity(),
    'size': sizescale.quantitative([36, 96]), // domain -  36 to 96 inches
    'sizeInput': identity()
  }, 'axis')
});

// qualitative property
export const favoriteActivity = prePostMultiField({
  id: 'persona.favoriteActivity',
  label: 'Favorite Activity',
  dataType: DataType.String,
  pre: access<string>('persona.favoriteActivity', 'Other'),
  post: identity(),
  mapping: mappingWithDefault({
    'axis': identity(),
    'color': greyscale.qualitative([
      'Sports', 'Cooking', 'Art', 'Gaming', 'Other'
    ]),
    'strokeColor': greyscale.qualitativeStrokeColor([
      'Sports', 'Cooking', 'Art', 'Gaming', 'Other'
    ])
  }, 'axis')
});

// quantitative property
export const ageGroup = prePostMultiField({
  id: 'persona.age_group',
  label: 'Age Group',
  dataType: DataType.String,
  pre: access<string>('persona.age_group', 'Other'),
  post: identity(),
  mapping: mappingWithDefault({
    'axis': identity(),
    'size': sizescale.qualitative(['Kid', 'Pre-Teen', 'Teen', 'Adult', 'Retired']),
    'sizeInput': identity()
  }, 'axis')
});

// Not in use right now
export const zipcode = simpleField<string>({
  id: 'persona.zipcode',
  label: 'Zip Code',
  bfieldId: 'zipcode',
  operator: access('persona.zipcode', 'Unknown')
});

export const PersonaFields = { id, persona, icon, color,
  favoriteActivity, height, zipcode, state, location,

  // Below are doing away
  name, gender, age_group: ageGroup, handedness
};
