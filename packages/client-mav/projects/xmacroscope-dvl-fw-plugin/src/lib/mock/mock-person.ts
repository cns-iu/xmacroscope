// refer https://angular.io/guide/styleguide#style-03-06 for import line spacing
import { access, chain, map, Operand } from '@ngx-dino/core';
import * as casual from 'casual-browserify';
import * as zipcodes from 'zipcodes';

import { ageGroups, colors, favoriteActivities, genders, shapes, Person } from '../data-model/person';


function nullable<T>(value: T, nullProb = .1): T | null {
  return casual.random > nullProb ? value : null;
}

const usZipCodes = Object.keys(zipcodes.codes)
  .map((c) => parseInt(c, 10))
  .filter(c => (zipcodes.lookup(c) || {}).country === 'US');

interface USLocation {
  state: string;
  latitude: number;
  longitude: number;
  zip: string;
}

export function mockUSLocation(): USLocation {
  return zipcodes.lookup(casual.random_element(usZipCodes)) || mockUSLocation() /* keep looking until we find a valid location */;
}

// @dynamic
export class MockPerson extends Person {
  @Operand(map(() => 'person' + casual.integer(1, 500)))
  id: string;

  @Operand(map(() => nullable(casual.first_name)))
  name: string;

  @Operand(map(() => casual.random_element(shapes)))
  icon: string;

  @Operand(map(() => casual.random_element(colors)))
  color: string;

  @Operand(map(() => nullable(casual.random_element(genders))))
  gender: 'male' | 'female' | 'other';

  @Operand(map(() => nullable(casual.random_element(ageGroups))))
  ageGroup: 'Kid' | 'Pre-Teen' | 'Teen' | 'Adult' | 'Retired';

  @Operand(map(() => nullable(casual.random > 0.1 ? 'right' : 'left') || 'ambidextrous'))
  handedness: 'left' | 'right' | 'ambidextrous';

  @Operand(map(() => nullable(casual.integer(36, 96))))
  height: number;

  @Operand(map(() => nullable(casual.integer(0, 12))))
  siblings: number;

  @Operand(map(() => nullable(casual.random_element(favoriteActivities))))
  favoriteActivity: 'Sports' | 'Cooking' | 'Art' | 'Gaming' | 'Other';

  @Operand(map(mockUSLocation))
  location: USLocation;

  @Operand(chain(access('location.zip'), map(nullable)))
  zipCode: string;

  @Operand(chain(access('location.state'), map(nullable)))
  state: string;

  @Operand(chain(access<USLocation>('location'), map((l) => nullable([l.latitude, l.longitude]) || [null, null])))
  latlng: [number, number];
}
