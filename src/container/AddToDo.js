import {connect} from 'react-redux';
import Forms from '../Forms.js';
import {addToDo,editToDo,inputData,editState} from '../action/index';
import {isLoading,finish,fail} from '../action/uiState';
//import {SetData} from '../storage/storage';
const mapStateToProps=state=>{
	//if(state.todos.data) SetData("list",state.todos.data);
	// const storage=window.localStorage;
	// if(state.todos.data) storage.setItem("list",JSON.stringify(state.todos.data));
	return {	
		...state,
		data:state.todos.data,
		input_data:state.todos.input_data,
		Loading:state.uiReducer.Loading,
		editing:state.todos.editing,
		loadData:state.todos.loadData
	};
};
const mapDispatchToProps=dispatch=>{
	return {
		onAdd:(text,id,time)=>{
			fetch('http://localhost:8888/getData',{
				method:"POST",
				headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
				},
				body:`id=${id}&todo=${text}&time=${time}&operation=add`
			}).then(res=>{
				console.log(res);
			});
			dispatch(addToDo(text,id,time));
		},
		onEdit:(id,text,time)=>{
			fetch('http://localhost:8888/getData',{
				method:"POST",
				headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
				},
				body:`id=${id}&todo=${text}&time=${time}&operation=edit`
			}).then(res=>{
				console.log(res);
			});
			dispatch(editToDo(id,text,time));
		},
		onChangeInput:(id,text,time)=>{
			dispatch(inputData(id,text,time));
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
	};
};
const AddToDo =connect(mapStateToProps,mapDispatchToProps)(Forms);
export default AddToDo;