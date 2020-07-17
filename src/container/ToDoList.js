import {connect} from 'react-redux';
import {removeToDo,inputData,editState} from '../action/index';
import Tables from '../Tables';
const mapsStateToProps=state=>{
	return{	
		data:state.todos.data,
		input_data:state.todos.input_data,
		Loading:state.uiReducer.Loading,
		editing:state.todos.editing
	};
};
const mapDispatchToProps=dispatch=>{
	return{
		onRemove:id=>{
			dispatch(removeToDo(id));
		},
		onEditClick:(id,text,time)=>{
			dispatch(inputData(id,text,time));
			dispatch(editState(true));
		}
	};
};
const ToDoList=connect(mapsStateToProps,mapDispatchToProps)(Tables);
export default ToDoList;
