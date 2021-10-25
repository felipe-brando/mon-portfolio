import { combineReducers } from 'redux';

import burgerMenuReducer from './burgerMenu';
import reposReducer from './works';

const rootReducer = combineReducers({
    burgerMenu: burgerMenuReducer,
    repos: reposReducer,

});
  
export default rootReducer;