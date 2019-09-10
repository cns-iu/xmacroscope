import * as moment_ from 'moment';
const moment = moment_; // See https://github.com/jvandemo/generator-angular2-library/issues/221

export const opponentRuns = {
  'default': [
    {
      id: 'cheetah-run',
      start: moment().add(1, 'year').toDate(),
      end: moment().add(1, 'year').add(.5, 'seconds').toDate(),
      pinned: true,
      person: {
        id: 'cheetah', icon: 'cheetah', age: 8, height: 32, opponent: 'real-cheetah', shoes: 'Paws',
        zipCode: '46202', state: 'IN', latitude: 39.7739, longitude: -86.1763
      }
    },
    {
      id: 'squirrel-run',
      start: moment().add(2, 'year').toDate(),
      end: moment().add(2, 'year').add(2, 'seconds').toDate(),
      pinned: true,
      person: {
        id: 'squirrel', icon: 'squirrel', age: 4, height: 11, opponent: 'real-squirrel', shoes: 'Paws',
        zipCode: '47405', state: 'IN', latitude: 39.1727, longitude: -86.5222
      }
    },
    {
      id: 'turtle-run',
      start: moment().add(3, 'year').toDate(),
      end: moment().add(3, 'year').add(5.136, 'seconds').toDate(),
      pinned: true,
      person: {
        id: 'turtle', icon: 'turtle', age: 30, height: 5, opponent: 'real-turtle', shoes: 'Paws',
        zipCode: '47907', state: 'IN', latitude: 40.4237, longitude: -86.9212
      }
    },
  ]
};
