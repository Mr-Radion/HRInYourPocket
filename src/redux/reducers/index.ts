import { combineReducers } from 'redux';

import authorizationMailReducer from './authorizationMail';

const rootReducer = combineReducers({
  authorizationMail: authorizationMailReducer,
});

export default rootReducer;
