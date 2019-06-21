import { combineReducers } from 'redux'

import { reducer as authReducer } from '../services/auth/authReducer'
 
const appReducer = combineReducers({
  auth: authReducer 
})

/* const rootReducer = (state, action) => {
  if (action.type === LOGOUT) state = undefined;
  return appReducer(state, action);
};*/

export default appReducer;
