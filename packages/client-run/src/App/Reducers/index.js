import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

const getPeopleAll = (state = [], action) => {
  switch (action.type) {
    case 'GET_PEOPLE_ALL':
      return {
        ...state,
        isFetching: true,
      };
    default:
      return state;
  }
};

/**
 * Basic counter example
 *
 * Takes a value action.incrementAmount
 */
const counter = (state = [], action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {
        ...state,
        count: (state.count + action.incrementAmount),
      };
    default:
      return state;
  }
};

// Redux reducer
const rootReducer = combineReducers({
  // Get people from GraphQL
  getPeopleAll,

  // Simple reducer as an example
  counter,

  // react-router reducer for history
  routerReducer,

  // redux form reducer
  form: formReducer,
});

export default rootReducer;
