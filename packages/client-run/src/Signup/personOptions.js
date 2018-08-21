const personOptions = {};

personOptions.shapes = [
  'square',
  'cross',
  'diamond',
  'triangle-up',
  'star',
];

personOptions.colors = [
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
];

personOptions.ageGroups = [
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

personOptions.gender = [
  'female',
  'male',
  'other',
];

personOptions.handedness = [
  'left',
  'right',
];

personOptions.siblings = { min: 0, max: 12 };
personOptions.height = { min: 36, max: 96 };

export default personOptions;
