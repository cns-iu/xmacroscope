import { casual } from './casual';

const GENDERS = ['male', 'female', 'other'];
const AGE = [
  '07-09',
  '10-12',
  '13-18',
  '19-30',
  '31-40',
  '41-50',
  '51-60',
  '61-70',
  '71+',
];

const MAX_LAT = 49.3457868; // north lat
const MIN_LAT = 24.7433195; // south lat
const MAX_LNG = -124.7844079; // west long
const MIN_LNG = -66.9513812; // east long

export class GeneratedPerson {
  id; // string;
  name; // string;
  icon; // string;
  color; // string;
  gender;
  age;
  handedness; // 'left' | 'right';
  zipCode; // string;
  state; // string;
  latitude; // number;
  longitude; // number;

  constructor() {
    this.id = `${casual.integer(1, 500)}`;
    this.name = casual.first_name;
    this.icon = casual.word;
    this.color = casual.safe_color_name;
    this.gender = casual.random_element(GENDERS);
    this.age = casual.random_element(AGE);
    this.handedness = casual.random > 0.1 ? 'right' : 'left';
    this.zipCode = casual.zip(5);
    this.state = casual.state;
    this.latitude = casual.integer(MIN_LAT, MAX_LAT);
    this.longitude = casual.integer(MIN_LNG, MAX_LNG);
  }
}

export function MockPerson() {
  return new GeneratedPerson();
}
