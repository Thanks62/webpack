import {connect} from 'react-redux';
import {removeToDo,inputData,editState,init} from '../action/index';
import Tables from '../Tables';
const mapsStateToProps=state=>{
	return{	
		data:state.todos.data,
		input_data:state.todos.input_data,
		Loading:state.uiReducer.Loading,
		editing:state.todos.editing,
		loadData:state.todos.loadData
	};
};
const mapDispatchToProps=dispatch=>{
	return{
		onRemove:id=>{
			fetch('http://localhost:8888/getData',{
				method:"POST",
				headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
				},
				body:`id=${id}&operation=delete`
			}).then(res=>{
				console.log(res);
			});
			dispatch(removeToDo(id));
		},
		onEditClick:(id,text,time)=>{
			dispatch(inputData(id,text,time));
			dispatch(editState(true));
		},
		onInit:(data,input_data,editing)=>{
			dispatch(init(data,input_data,editing));
		}
	};
};
const ToDoList=connect(mapsStateToProps,mapDispatchToProps)(Tables);
export default ToDoList;
