import moment from 'moment';

export const opponentRuns = {
  'default': [
    {
      id: 'cheetah-run',
      start: moment().add(1, 'year').toDate(),
      end: moment().add(1, 'year').add(.5, 'seconds').toDate(),
      pinned: true,
      person: {
        id: 'cheetah', icon: 'cheetah', age: 8, height: 32, opponent: 'real-cheetah', shoes: 'Paws',
        zipCode: '47401', state: 'IN', latitude: 38.557616, longitude: -86.450083
      }
    },
    {
      id: 'squirrel-run',
      start: moment().add(2, 'year').toDate(),
      end: moment().add(2, 'year').add(2, 'seconds').toDate(),
      pinned: true,
      person: {
        id: 'squirrel', icon: 'squirrel', age: 4, height: 11, opponent: 'real-squirrel', shoes: 'Paws',
        zipCode: '47403', state: 'IN', latitude: 38.270101, longitude: -86.724621
      }
    },
    {
      id: 'turtle-run',
      start: moment().add(3, 'year').toDate(),
      end: moment().add(3, 'year').add(5.136, 'seconds').toDate(),
      pinned: true,
      person: {
        id: 'turtle', icon: 'turtle', age: 30, height: 5, opponent: 'real-turtle', shoes: 'Paws',
        zipCode: '47402', state: 'IN', latitude: 38.442403, longitude: -86.977195
      }
    },
  ]
};
