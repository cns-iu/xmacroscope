const personOptions = {};

personOptions.shapes = ['square', 'cross', 'diamond', 'triangle-up', 'star'];

// TODO: Make this an object that describes the color along with HEX
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

// We're discussing the best way to categorize these on issue:
// https://github.com/cns-iu/xmacroscope/issues/180
// These were previously number range options.
personOptions.ageGroups = ['Kid', 'Pre-Teen', 'Teen', 'Adult', 'Retired'];

personOptions.gender = ['female', 'male', 'other'];

personOptions.favoriteActivity = [
  'Sports',
  'Cooking',
  'Art',
  'Gaming',
  'Other',
];

personOptions.handedness = ['left', 'right'];

personOptions.siblings = { min: 0, max: 12 };
personOptions.height = { min: 36, max: 96 };

export default personOptions;
