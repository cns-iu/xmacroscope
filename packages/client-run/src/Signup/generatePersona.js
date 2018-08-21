import faker from 'faker';
import { sample } from 'lodash';
import * as zipcodes from 'zipcodes';
import personOptions from './personOptions';

const usZipCodes = Object.keys(zipcodes.codes)
  .map(c => parseInt(c, 10))
  .filter(c => (zipcodes.lookup(c) || {}).country === 'US');

function fakeUSLocation() {
  return zipcodes.lookup(sample(usZipCodes)) || fakeUSLocation();
}

// Generate persona
const generatePersona = () => {
  const fakeShape = sample(personOptions.shapes);

  const fakeColor = sample(personOptions.colors);

  const fakeGender = sample(personOptions.gender);

  const fakeAgeGroup = sample(personOptions.ageGroups);

  const fakeHandedness = sample(personOptions.handedness);

  // Height in inches
  const fakeHeight = faker.random.number(personOptions.height);

  // Number of siblings
  const fakeSiblings = faker.random.number(personOptions.siblings);

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
