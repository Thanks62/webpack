import {connect} from 'react-redux';
import Forms from '../Forms.js';
import {addToDo,editToDo,inputData,editState} from '../action/index'
import {isLoading,finish,fail} from '../action/uiState'
const mapStateToProps=state=>{
	const storage=window.localStorage;
	if(state.todos.data) storage.setItem("list",JSON.stringify(state.todos.data));
	return {	
		...state,
		data:state.todos.data,
		input_data:state.todos.input_data,
		Loading:state.uiReducer.Loading,
		editing:state.todos.editing
	}
}
const mapDispatchToProps=dispatch=>{
	return {
		onAdd:(text,id,time)=>{
			dispatch(addToDo(text,id,time));
		},
		onEdit:(text,id,time)=>{
			dispatch(editToDo(text,id,time));
		},
		onChangeInput:(id,text,time)=>{
			dispatch(inputData(id,text,time))
		},
		onLoading:()=>{
			dispatch(isLoading(true));
		},
		onEditClick:(id,text,time)=>{
			dispatch(inputData(id,text,time));
			dispatch(editState(true));
		},
		onFinishData:()=>{
			dispatch(finish(false));
		},
		onFail:()=>{
			dispatch(fail(false));
		}
	}
}
const AddToDo =connect(mapStateToProps,mapDispatchToProps)(Forms)
export default AddToDo;