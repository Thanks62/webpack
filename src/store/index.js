import {createStore,combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import todos from '../reducers/todos'
import uiReducer from '../reducers/uiReducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let Reducers=combineReducers({
	todos,
	uiReducer,
	form:formReducer
})
let store=createStore(Reducers,composeEnhancers());
export default store;

