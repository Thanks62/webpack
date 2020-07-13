import {connect} from 'react-redux';
import Forms from '../Forms.js';
import {addToDo,editToDo,inputData,isLoading,finish,fail} from '../action/index'
const mapStateToProps=state=>{
	const storage=window.localStorage;
	if(state.data) storage.setItem("list",JSON.stringify(state.data));
	return {	
		data:state.data,
		input_data:state.input_data,
		Loading:state.Loading
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