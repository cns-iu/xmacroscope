import * as casual_ from 'casual-browserify';
const casual = casual_;
import * as zipcodes from 'zipcodes';
import { pick } from 'lodash';

import { ageGroups, colors, favoriteActivities, shapes, Person } from '../shared/person';


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

export class MockPerson extends Person {
  constructor() {
    super({
      id: 'person' + casual.integer(1, 500),
      name: nullable(casual.first_name),
      icon: casual.random_element(shapes),
      color: casual.random_element(colors),
      ageGroup: nullable(casual.random_element(ageGroups)),
      favoriteActivity: nullable(casual.random_element(favoriteActivities)),
      height: nullable(casual.integer(36, 96))
    });

    const location = mockUSLocation();
    Object.assign(this, {
      zipCode: nullable(location.zip),
      state: nullable(location.state)
    }, nullable(pick(location, ['latitude', 'longitude'])));
  }
}
