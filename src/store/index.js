import { createStore, compose } from 'redux';
import reducer from '../reducers/index.js';

// middlewares import

// middlewares calls

// for redux devtools et nos middlewares
// https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers();

const store = createStore(
    reducer, 
    enhancers
);

export default store;