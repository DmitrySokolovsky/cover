import { combineReducers  } from 'redux';
import { verifyReducer } from './verify.reducer';
import { socketReducer } from './socket.reucer';

export const appReducers = combineReducers({
    verifyUser: verifyReducer,
    socketApp: socketReducer
});