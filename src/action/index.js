export const REMOVE_TODO='REMOVE_TODO';
export const ADD_TODO='ADD_TODO';
export const DEFAULT='DEFAULT';
export const EDIT_TODO='EDIT_TODO';
export const INPUT_DATA='INPUT_DATA';
export const IS_LOADING='IS_LOADING';
export const FINISH='FINISH';
export const FAIL='FAIL';
export const addToDo=(text,id,time)=>{
	return{
		type:ADD_TODO,
		data:{text,id,time}
	}
}
export const removeToDo=id=>{
	return{
		type:REMOVE_TODO,
		id
	}
	
}
export const editToDo=(id,text,time)=>{
	return{
		type:EDIT_TODO,
		data:{id,text,time}
	}
	
}
export const init=()=>{
	return{
		type:DEFAULT,
	}
	
}
export const inputData=(id,text,time)=>{
	return{
		type:INPUT_DATA,
		data:{id,text,time}
	}
}
export const isLoading=(loading)=>{
	return {
		type:IS_LOADING,
		loading
	}
}
export const finish=(loading)=>{
	return {
		type:FINISH,
		loading
	}
}
export const fail=(loading)=>{
	return {
		type:FAIL,
		loading
	}
}