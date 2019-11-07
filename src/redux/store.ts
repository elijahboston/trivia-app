/* eslint-disable no-undef, @typescript-eslint/no-unnecessary-condition, @typescript-eslint/strict-boolean-expressions */
/**
 * Disable linting on this file since the use of window
 * causes false positives
 */
import { createStore, applyMiddleware, compose } from 'redux';
import {default as thunk} from 'redux-thunk';
import rootReducer from './reducers';

/**
 * Define an interface for window
 */
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;