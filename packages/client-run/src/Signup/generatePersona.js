import faker from 'faker';
import { sample } from 'lodash';
import * as zipcodes from 'zipcodes';

const codes = Object.keys(zipcodes.codes).map((c) => parseInt(c, 10)).filter(c => !isNaN(c));
function fakeUSLocation() {
  return zipcodes.lookup(sample(codes)) || fakeUSLocation() /* keep looking until we find a valid location */;
}

// Generate persona
const generatePersona = () => {
  const fakeShape = sample([
    'square',
    'cross',
    'diamond',
    'triangle-up',
    'star',
  ]);

  const fakeColor = sample([
    '#D36E44',
    '#D30706',
    '#0707D2',
    '#8E1BCE',
    '#D372D2',
    '#55D4D2',
    '#9B180F',
    '#33820D',
    '#D39827',
    '#D3D406',
  ]);

  const fakeGender = sample([
    'female',
    'male',
    'other',
  ]);

  const fakeAgeGroup = sample([
    '07-09',
    '10-12',
    '13-18',
    '19-30',
    '31-40',
    '41-50',
    '51-60',
    '61-70',
    '71+',
  ]);

  const fakeHandedness = sample([
    'left',
    'right',
  ]);

  // Height in inches
  const fakeHeight = faker.random.number({ min: 36, max: 96 });

  // Number of siblings
  const fakeSiblings = faker.random.number({ min: 0, max: 12 });

  // Location
  const fakeLocation = fakeUSLocation();

  return {
    name: faker.name.findName(),
    icon: fakeShape,
    color: fakeColor,
    gender: fakeGender,
    age_group: fakeAgeGroup,
    handedness: fakeHandedness,
    height: fakeHeight,
    siblings: fakeSiblings,
    zipcode: fakeLocation.zip,
    latitude: fakeLocation.latitude,
    longitude: fakeLocation.longitude,
    state: fakeLocation.state,
  };
};

export default generatePersona;
