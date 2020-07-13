import {createStore} from 'redux'
import {combineReducers} from 'redux'
import todos from '../reducers/todos'
import uiReducer from '../reducers/uiReducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let Reducers=combineReducers({
	todos,
	uiReducer
})
let store=createStore(Reducers,composeEnhancers());
export default store;

