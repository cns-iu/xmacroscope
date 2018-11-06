// refer https://angular.io/guide/styleguide#style-03-06 for import line spacing
import * as casual from 'casual-browserify';
import * as zipcodes from 'zipcodes';

import { map, Operand } from '@ngx-dino/core';
import { ageGroups, colors, favoriteActivities, genders, shapes,
  minLat, maxLat, minLng, maxLng, Person
} from '../data-model/person';


function nullable<T>(value: T, nullProb = .1): T | null {
  return casual.random > nullProb ? value : null;
}

export function mockUSLatLng(): [number, number] {
  return [casual.integer(minLat, maxLat), casual.integer(minLng, maxLng)];
}

const usZipCodes = Object.keys(zipcodes.codes)
  .map((c) => parseInt(c, 10))
  .filter(c => (zipcodes.lookup(c) || {}).country === 'US');

export function mockUSLocation(): {state: string, latitude: number, longitude: number, zip: string} {
  return zipcodes.lookup(casual.random_element(usZipCodes)) || mockUSLocation() /* keep looking until we find a valid location */;
}

// @dynamic
export class MockPerson extends Person {
  @Operand(map(i => 'person' + casual.integer(1, 500)))
  id: string;

  @Operand(map(name => nullable(casual.first_name)))
  name: string;

  @Operand(map(casual.random_element(shapes)))
  icon: string;

  @Operand(map(casual.random_element(colors)))
  color: string;

  @Operand(map(nullable(casual.random_element(genders))))
  gender: 'male' | 'female' | 'other';

  @Operand(map(nullable(casual.random_element(ageGroups))))
  ageGroup: 'Kid' | 'Pre-Teen' | 'Teen' | 'Adult' | 'Retired';

  @Operand(map(handedness => nullable(casual.random > 0.1 ? 'right' : 'left')))
  handedness: 'left' | 'right';

  @Operand(map(height => nullable(casual.integer(36, 96))))
  height: number;

  @Operand(map(siblings => nullable(casual.integer(0, 12))))
  siblings: number;

  @Operand(map(nullable(casual.random_element(favoriteActivities))))
  favoriteActivity: 'Sports' | 'Cooking' | 'Art' | 'Gaming' | 'Other';

  constructor() {
    super();
    const location = mockUSLocation();
    this.zipcode = nullable(location.zip);
    this.state = nullable(location.state);
    this.latlng = nullable([location.latitude, location.longitude]) || [null, null];
  }
}
