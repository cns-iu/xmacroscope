import casual from 'casual-browserify';
import zipcodes from 'zipcodes';

import { GVData, icons, opponents, Person, shoes } from '../shared/person';


interface USLocation {
  state: string;
  latitude: number;
  longitude: number;
  zip: string;
}

const opponentsMinusVistor = opponents.filter(o => o.label !== 'Visitor');
const shoesMinusBarefoot = shoes.filter(s => s.label !== 'Barefoot');

const usZipCodes = Object.keys(zipcodes.codes)
  .map((c) => parseInt(c, 10))
  .filter(c => (zipcodes.lookup(c) ?? {}).country === 'US');


function nullable<T>(value: T, nullProb = .1): T | null {
  return casual.random > nullProb ? value : null;
}

export function mockUSLocation(): USLocation {
  return zipcodes.lookup(casual.random_element(usZipCodes)) ?? mockUSLocation() /* keep looking until we find a valid location */;
}

export class MockPerson extends Person {
  constructor() {
    const location = mockUSLocation();

    super({
      id: 'person' + casual.integer(1, 500),
      icon: casual.random_element(icons),
      age: casual.integer(0, 100),
      height: casual.integer(0, 89),
      opponent: (casual.random_element(opponentsMinusVistor) as GVData).label,
      shoes: (casual.random_element(shoesMinusBarefoot) as GVData).label,
      zipCode: nullable(location.zip)!,
      state: nullable(location.state)!,
      latitude: nullable(location.latitude)!,
      longitude: nullable(location.longitude)!
    });
  }
}
