import { combineReducers } from 'redux';

import auth from './auth/reducer';
import expense from './expense/reducer';

export default combineReducers({ auth, expense });
