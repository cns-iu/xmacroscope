const personOptions = {};

personOptions.opponents = ['Turtle', 'Squirrel', 'Cheetah'];

personOptions.shoes = ['Paws', 'Dress', 'Wheels', 'Casual', 'Heels'];

personOptions.shapes = ['square', 'cross', 'diamond', 'triangle-up', 'star'];

personOptions.colors = [
  { name: 'violet', hexValue: '#402E9A' },
  { name: 'blue', hexValue: '#3F88DE' },
  { name: 'green', hexValue: '#86BD81' },
  { name: 'yellow', hexValue: '#FCF6C3' },
  { name: 'orange', hexValue: '#F1D582' },
  { name: 'red', hexValue: '#DD4C3D' },
];

// We're discussing the best way to categorize these on issue:
// https://github.com/cns-iu/xmacroscope/issues/180
// These were previously number range options.
personOptions.age = ['1', '2'];

personOptions.gender = ['female', 'male', 'other'];

personOptions.height = { min: 36, max: 96 };

export default personOptions;
