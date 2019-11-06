import { createStore, applyMiddleware } from 'redux';
import {default as thunk} from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;