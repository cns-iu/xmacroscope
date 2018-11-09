const personOptions = {};

personOptions.shapes = ['square', 'cross', 'diamond', 'triangle-up', 'star'];

personOptions.colors = [
  { name: 'pastel red', hexValue: '#D36E44' },
  { name: 'red', hexValue: '#D30706' },
  { name: 'blue', hexValue: '#0707D2' },
  { name: 'purple', hexValue: '#8E1BCE' },
  { name: 'candy purple', hexValue: '#D372D2' },
  { name: 'aqua', hexValue: '#55D4D2' },
  { name: 'crimson red', hexValue: '#9B180F' },
  { name: 'forrest green', hexValue: '#33820D' },
  { name: 'honey brown', hexValue: '#D39827' },
  { name: 'neon yellow', hexValue: '#D3D406' },
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

personOptions.height = { min: 36, max: 96 };

export default personOptions;
