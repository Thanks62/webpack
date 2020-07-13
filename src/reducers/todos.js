import {ADD_TODO,REMOVE_TODO,DEFAULT,EDIT_TODO,INPUT_DATA,IS_LOADING,FINISH} from'../action/index.js';
var initState={};
function init(){
	if (window.localStorage){
        const storage=window.localStorage;
        let list=storage.getItem("list");
        initState=JSON.parse(list)?{
			data:JSON.parse(list),
			input_data:{
				id:new Date().toString(),
				name:'',
				job:''
			},
			Loading:false
			}:{
				data:[],
				input_data:{},
				Loading:false
			};
	}
}
init();
export default function(state=initState,action){
	switch(action.type){
		case ADD_TODO:return{
			data:[
				...state.data,
				{
					id:action.data.id,
					name:action.data.text,
					job:action.data.time
				}
			]
		} 
		case REMOVE_TODO:
		let list=[];
		return{
			data:list=state.data.filter((li)=>{
				return li.id!==action.id;
			} 
		)}
		case EDIT_TODO:
		let edit=[];
			return {
				data:edit=state.data.map((li)=>{
				if(li.id===action.data.id){
					li.name=action.data.text;
					li.job=action.data.time;
				}
			return li;
		})}
		case INPUT_DATA:
		return {
			data:state.data,
			input_data:{
			id:action.data.id,
			name:action.data.text,
			job:action.data.time
		}}
		case IS_LOADING:
		return{
			data:state.data,
			input_data:state.input_data,
			Loading:action.loading
		}
		case FINISH:
		return{
			data:state.data,
			input_data:state.input_data,
			Loading:action.loading
		}
		case DEFAULT:
		default:return state;
	}
}