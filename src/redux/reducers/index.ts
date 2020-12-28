import { combineReducers } from 'redux';

import currentUserReducer from './currentUser';
// import tasksReducer from './tasks';

const rootReducer = combineReducers({
  user: currentUserReducer,
  // tasks: tasksReducer
});

export default rootReducer;
