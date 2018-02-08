/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './Reducers/index';

// Create a browser history
const history = createHistory();

// Redux Chrome console helper
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const defaultState = {
  counter: {
    count: 0,
  },
};

// Build store with reducers and middleware
const store = createStore(
  rootReducer,
  defaultState,
  composeEnhancers(applyMiddleware(
    thunkMiddleware,
    routerMiddleware(history),
  )),
);
export default store;
