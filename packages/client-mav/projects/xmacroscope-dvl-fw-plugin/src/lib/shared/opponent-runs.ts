import * as moment_ from 'moment';

const moment = moment_; // See https://github.com/jvandemo/generator-angular2-library/issues/221


// TODO: Make opponent locations be data/site driven
// TODO: Get Minnesota and California locations

function getOpponentRuns(location: string): any[] {
  const opponentRunData = [
    {
      id: 'penguin-run',
      start: moment().add(1, 'year').toDate(),
      end: moment().add(1, 'year').add(5.48, 'seconds').toDate(),
      pinned: true,
      person: {
        id: 'penguin', icon: 'penguin', age: 13, height: 35, opponent: 'real-penguin', shoes: 'penguin-feet'
      },
      locations: {
        'Indiana': { zipCode: '47907', state: 'IN', latitude: 40.4237, longitude: -86.9212 },
        'Minnesota': { zipCode: '47907', state: 'IN', latitude: 40.4237, longitude: -86.9212 },
        'Ohio': { zipCode: '44114', state: 'OH', latitude: 41.5085, longitude: -81.6954 },
        'California': { zipCode: '47907', state: 'IN', latitude: 40.4237, longitude: -86.9212 }
      }
    },
    {
      id: 'squirrel-run',
      start: moment().add(2, 'year').toDate(),
      end: moment().add(2, 'year').add(2.20, 'seconds').toDate(),
      pinned: true,
      person: {
        id: 'squirrel', icon: 'squirrel', age: 3, height: 11, opponent: 'real-squirrel', shoes: 'squirrel-feet'
      },
      locations: {
        'Indiana': { zipCode: '47405', state: 'IN', latitude: 39.1727, longitude: -86.5222 },
        'Minnesota': { zipCode: '47907', state: 'IN', latitude: 40.4237, longitude: -86.9212 },
        'Ohio': { zipCode: '43215', state: 'OH', latitude: 39.959836, longitude: -83.007020 },
        'California': { zipCode: '47907', state: 'IN', latitude: 40.4237, longitude: -86.9212 }
      }
    },
    {
      id: 'cheetah-run',
      start: moment().add(3, 'year').toDate(),
      end: moment().add(3, 'year').add(0.37, 'seconds').toDate(),
      pinned: true,
      person: {
        id: 'cheetah', icon: 'cheetah', age: 5, height: 36, opponent: 'real-cheetah', shoes: 'cheetah-feet'
      },
      locations: {
        'Indiana': { zipCode: '46202', state: 'IN', latitude: 39.7739, longitude: -86.1763 },
        'Minnesota': { zipCode: '47907', state: 'IN', latitude: 40.4237, longitude: -86.9212 },
        'Ohio': { zipCode: '45220', state: 'OH', latitude: 39.1433, longitude: -84.5090 },
        'California': { zipCode: '47907', state: 'IN', latitude: 40.4237, longitude: -86.9212 }
      }
    },
  ];

  return opponentRunData.map(run => (Object.assign(run.person, run.locations[location], run)));
}

export const opponentRuns = {
  'default': getOpponentRuns('Indiana'),
  'cosi':  getOpponentRuns('Ohio'),
  'cns-iu': getOpponentRuns('Indiana'),
  'smm': getOpponentRuns('Minnesota'),
  'uci': getOpponentRuns('California')
};
