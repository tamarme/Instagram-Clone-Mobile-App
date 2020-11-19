import { createStore, combineReducers } from 'redux';
import logIn from './reducers/LogIn/LogInReducer';

const reducer = combineReducers({
    logIn
});

export const store = createStore(reducer);