import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Input, Button} from 'antd';
import {addToDo} from './action/index'
import {connect} from 'react-redux';
let ReduxForm = props => {
  const InputToDo=(props)=>{
  	return(
  		<Input required />
  	)
  }
  const { handleSubmit,btnText,id} = props
  return (
    <form>
		<Field name="id" component="input" value={id}/>
      <div>
        <label htmlFor="name">To Do</label>
        <Field name="name" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="job">Time</label>
        <Field name="job" component="input" type="text" />
      </div>
      <button onClick={()=>{Add('ss','ll','kk')}}>{btnText}</button>
    </form>
  )
}

ReduxForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ReduxForm)
ReduxForm = connect(
  state => ({
    initialValues: state.todos.input_data // pull initial values from account reducer
  }),
  {Add: addToDo} // bind account loading action creator
)(ReduxForm)

export default ReduxForm