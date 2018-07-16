import { Field, simpleField, prePostMultiField, DataType } from '@ngx-dino/core';
import {
  access,
  combine,
  lookup,
  identity,
  map,
  chain,
  persona,
  mappingWithDefault,
  greyscale
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
  operator: access('persona.color', '#696969')
});

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


export const height = prePostMultiField({
  id: 'persona.height',
  label: 'Height (inches)',
  dataType: DataType.Number,
  pre: access<number>('persona.height', 36),
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

export const siblings = prePostMultiField({
  id: 'persona.siblings',
  label: '# Siblings',
  dataType: DataType.Number,
  pre: chain<number, string>(access<number>('persona.siblings', 1), map(String)),
  post: identity(),
  mapping: mappingWithDefault({
    'axis': identity(),
    'color': lookup<string>({
      '0': '#7fc97f',
      '1': '#beaed4',
      '2': '#fdc086',
      '3': '#ffff99',
      '4': '#386cb0',
      '5': '#f0027f',
      '6': '#bf5b17',
      '7': '#666666',
      '8': '#17becf',
      '9': '#17becf',
      '10': '#17becf',
      '11': '#17becf',
      '12': '#17becf'
    }, '#bcbd22'),
    'size': lookup<number>({
      '0': 66,
      '1': 77,
      '2': 88,
      '3': 99,
      '4': 110,
      '5': 121,
      '6': 132,
      '7': 143,
      '8': 155,
      '9': 165,
      '10': 175,
      '11': 185,
      '12': 195,
    }, 10),
  }, 'axis')
});

export const ageGroup = prePostMultiField({
  id: 'persona.age_group',
  label: 'Age Group',
  dataType: DataType.String,
  pre: access<string>('persona.age_group', '51-60'),
  post: identity(),
  mapping: mappingWithDefault({
    'axis': identity(),
    'color': greyscale.qualitative([
      '07-09',
      '10-12',
      '13-18',
      '19-30',
      '31-40',
      '41-50',
      '51-60',
      '61-70',
      '70+'], '#bdbdbd'), // '#bdbdbd' is default color TBD TODO
    'strokeColor': greyscale.qualitative([
      '07-09',
      '10-12',
      '13-18',
      '19-30',
      '31-40',
      '41-50',
      '51-60',
      '61-70',
      '70+'], '#bdbdbd', 10), // '#bdbdbd' is default color, offset is 10 TBD TODO
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
    }, 100),
  }, 'axis')
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
