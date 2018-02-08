export const getPeopleAll = () => ({
  type: 'GET_PEOPLE_ALL',
});

export const incrementCounter = incrementAmount => ({
  type: 'INCREMENT_COUNTER',
  incrementAmount,
});

export function fetchPeopleALl() {
  console.log('fetching');
}
