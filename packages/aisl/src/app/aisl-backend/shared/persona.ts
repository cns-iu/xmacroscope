export interface Persona {
  id: string;
  name: string;
  icon: string;
  color: string;
  gender: 'male' | 'female' | 'other';
  age_group: '07-09' | '10-12' | '13-18' | '19-30' | '31-40' | '41-50' | '51-60' | '61-70' | '71+';
  handedness: 'left' | 'right';
  zipcode: string;
  state: string;
  latitude: number;
  longitude: number;
}
