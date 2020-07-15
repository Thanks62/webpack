import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Input, Button} from 'antd';
import { connect } from 'react-redux';
import {addToDo,init} from './action/index'

let ReduxForm = props => {
  const { handleSubmit,Add,Init} = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="id" component="input" type="text" />
      <div>
        <label htmlFor="name">To Do</label>
        <Field name="name" component="input" type="text"/>
      </div>
      <div>
        <label htmlFor="job">Time</label>
        <Field name="job" component="input" type="text" />
      </div>
      <Button htmlType="submit">Add</Button>
    </form>
  )
}

ReduxForm = reduxForm({
  // a unique name for the form
  form: 'contact',
  enableReinitialize:true,
  onSubmit:(values,dispatch)=>{
    console.log(values);
    dispatch(addToDo(values.name,values.id,values.job))
  }
})(ReduxForm)
ReduxForm=connect(
  state=>({
    initialValues:state.todos.input_data
  }),{Add:addToDo,Init:init}
)(ReduxForm)
export default ReduxForm