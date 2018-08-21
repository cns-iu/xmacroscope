export interface Persona {
  id: string;
  name: string; // DELETE
  icon: string;
  color: string;
  gender: 'male' | 'female' | 'other';
  age_group: 'Kid' | 'Pre-Teen' | 'Teen' | 'Adult' | 'Retired';
  handedness: 'left' | 'right'; // DELETE
  height: number;
  favoriteActivity: 'Sports' | 'Cooking' | 'Art' | 'Gaming' | 'Other';
  // siblings: number;
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
