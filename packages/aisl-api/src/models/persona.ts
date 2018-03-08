export interface Persona {
  id: string;
  name: string; // DELETE
  icon: string;
  color: string;
  gender: 'male' | 'female' | 'other';
  age_group: '07-09' | '10-12' | '13-18' | '19-30' | '31-40' | '41-50' | '51-60' | '61-70' | '71+';
  handedness: 'left' | 'right'; // DELETE
  // altitude: number; // Feet above sea level?
  // height: number; // Inches?
  // weight: number; // Lbs? - But may be displayed as Blood Volume
  // athleticism: 'fast' | 'slow';
  // isMocked: boolean; // If data is generated or 'real'
  zipcode: string;

  // Keep, but generated from Zip Code
  state: string;
  latitude: number;
  longitude: number;
}
