/* jshint esversion:6 */
const fs = require('fs');

// Read in array of runs as exported by GraphQL
const data = JSON.parse(fs.readFileSync(process.argv[2]));

// Flatten data into an array of simple objects
const newArray = data.data.Runs.map(r => Object.assign({}, r, r.person));
newArray.reverse();

// Get header from first object
const header = Object.keys(newArray[0]) 
  .filter(f => f !== 'person'); // Ignoring the person object

// Convert object array into a simple csv string
const csvArray = [header].concat(newArray.map(obj => header.map(field => obj[field])));
const csvContent = csvArray.map(row => row.join(',')).join('\n') + '\n';

// Write out CSV
fs.writeFileSync(process.argv[3], csvContent);
