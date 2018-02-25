import { createStore, applyMiddleware } from 'redux';
import { appReducers } from './reducers';

export const coverAppStore = createStore(
    appReducers
);