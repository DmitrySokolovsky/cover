import { combineReducers  } from 'redux';
import { verifyReducer } from './verify.reducer';

export const appReducers = combineReducers({
    verifyUser: verifyReducer
});