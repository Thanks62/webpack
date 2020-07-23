import {ADD_TODO,REMOVE_TODO,DEFAULT,EDIT_TODO,INPUT_DATA, EDIT_STATE} from'../action/index.js';
//import {GetData,GetDataSource} from '../storage/storage';
//import actions from 'redux-form/lib/actions';
var initState={
	data:[],
	input_data:{},
	editing:false
};
// function init(callback){
// 	if (window.localStorage){
// 		//let list=GetData("list");
// 		//let list=await GetDataSource();
// 		fetch('http://localhost:8888/getData').then(function(response) {
//         if (response.ok) {
// 			response.json().then(function(data) {
// 			var list=data;
// 			initState=list?{
// 				data:list,
// 				input_data:{
// 					id:'',
// 					name:'',
// 					job:''
// 				},
// 				editing:false
// 				}:{
// 					data:[],
// 					input_data:{},
// 					editing:false
// 				};
// 				callback(initState);
// 			});
//         } else {
// 			console.log(response.status);
// 			}
// 		}, function(e) {
// 			console.log("Fetch failed!", e);
// 		});
// 	}
	
// }

// init(function(data){
// 	initState=data;
// 	action(initState,{type:DEFAULT});
// 	console.log("init",initState);
// 	return initState;
// });
export default function action(state=initState,action){
	switch(action.type){
		case ADD_TODO:return{
			...state,
			data:[
				...state.data,
				{
					id:action.data.id,
					name:action.data.text,
					job:action.data.time
				}
			]
		}; 
		case REMOVE_TODO:
		return{
			...state,
			data:state.data.filter((li)=>{
				return li.id!==action.id;
			} 
		)};
		case EDIT_TODO:
		return {
			...state,
			data:state.data.map((li)=>{
			if(li.id===action.data.id){
				li.name=action.data.text;
				li.job=action.data.time;
			}
			return li;
			}),
			editing:false
		};
		case INPUT_DATA:
		return {
			data:state.data,
			input_data:{
			id:action.data.id,
			name:action.data.text,
			job:action.data.time
		}};
		case EDIT_STATE:
		return{
			...state,
			editing:action.edit
		};
		case DEFAULT:
		return {
			...state,
			data: action.data.data,
			// data:[
			// 	{id:'ss',
			// 	name:'22',
			// 	job:'ss'}
			// ],
			input_data:action.data.input_data
        };
		default:return state;
	}
}