import {connect} from 'react-redux';
import Forms from '../Forms.js';
import {addToDo,editToDo,inputData} from '../action/index'
import {isLoading,finish,fail} from '../action/uiState'
const mapStateToProps=state=>{
	const storage=window.localStorage;
	if(state.todos.data) storage.setItem("list",JSON.stringify(state.todos.data));
	return {	
		data:state.todos.data,
		input_data:state.todos.input_data,
		Loading:state.uiReducer.Loading
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
		},
		onFinishData:(loading)=>{
			dispatch(finish(false));
		},
		onFail:(loading)=>{
			dispatch(fail(false));
		}
	}
}
const AddToDo =connect(mapStateToProps,mapDispatchToProps)(Forms)
export default AddToDo;