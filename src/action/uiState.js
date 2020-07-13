export const IS_LOADING='IS_LOADING';
export const FINISH='FINISH';
export const FAIL='FAIL';
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