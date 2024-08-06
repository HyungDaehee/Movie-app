import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import movieReducer from './MovieReducer.js';

const store = createStore( movieReducer, applyMiddleware(thunk));

export default store;
