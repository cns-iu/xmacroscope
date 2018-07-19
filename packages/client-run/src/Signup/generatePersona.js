import faker from 'faker';
import { sample } from 'lodash';

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
    '0-6',
    '6-14',
    '15-24',
    '25-34',
    '35-44',
    '45-54',
    '55-64',
    '65-74',
    '75-85',
    '85+',
  ]);

  const fakeHandedness = sample([
    'left',
    'right',
    'ambidextrous',
  ]);

  // South Lat
  const MIN_LAT = 24.7433195;
  // North lat
  const MAX_LAT = 49.3457868;
  // East long
  const MIN_LNG = -66.9513812;
  // West long
  const MAX_LNG = -124.7844079;

  // Height in inches
  const fakeHeight = faker.random.number({ min: 36, max: 96 });

  // Number of siblings
  const fakeSiblings = faker.random.number({ min: 0, max: 12 });

  // Location
  const fakeLat = faker.finance.amount(MIN_LAT, MAX_LAT, 9);
  const fakeLong = faker.finance.amount(MIN_LNG, MAX_LNG, 9);

  return {
    name: faker.name.findName(),
    icon: fakeShape,
    color: fakeColor,
    gender: fakeGender,
    age_group: fakeAgeGroup,
    handedness: fakeHandedness,
    height: fakeHeight,
    siblings: fakeSiblings,
    zipcode: faker.address.zipCode('#####'),
    latitude: fakeLat,
    longitude: fakeLong,
    state: faker.address.state(),
  };
};

export default generatePersona;
