import {createStore} from 'redux'
//import {combineReducers} from 'redux'
import todos from '../reducers/todos'
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store=createStore(todos);
export default store;

