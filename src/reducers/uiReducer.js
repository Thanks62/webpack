import {IS_LOADING,FINISH,FAIL} from'../action/uiState.js';
var initState={};
function init(){
	initState={Loading:false};
}
init();
export default function(state=initState,action){
	switch(action.type){
		case IS_LOADING:
		return{
			...state,
			Loading:action.loading
		};
		case FINISH:
		case FAIL:
		return{
			...state,
			Loading:action.loading
		};
		default:return state;
	}
}