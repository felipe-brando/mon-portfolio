import { combineReducers } from 'redux';

import burgerMenuReducer from './burgerMenu';

const rootReducer = combineReducers({
    burgerMenu: burgerMenuReducer,

});
  
export default rootReducer;