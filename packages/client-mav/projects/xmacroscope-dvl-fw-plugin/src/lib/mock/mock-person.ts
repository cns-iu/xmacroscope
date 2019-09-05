import * as casual_ from 'casual-browserify';
const casual = casual_;
import { pick } from 'lodash';
import * as zipcodes from 'zipcodes';

import { icons, opponents, Person, shoes } from '../shared/person';


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
      icon: casual.random_element(icons),
      age: casual.integer(0, 120),
      height: casual.integer(12, 96),
      opponent: casual.random_element(opponents).label,
      shoes: casual.random_element(shoes).label
    });

    const location = mockUSLocation();
    Object.assign(this, {
      zipCode: nullable(location.zip),
      state: nullable(location.state)
    }, nullable(pick(location, ['latitude', 'longitude'])));
  }
}
