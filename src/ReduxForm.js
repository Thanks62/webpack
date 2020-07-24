import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Input, Button,Row,Col} from 'antd';
import { connect } from 'react-redux';
import {addToDo,init} from './action/index';
import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';
import './Form.css';
const InputToDo=({input,label})=>{
  return(
    <Form.Item
					label={label}
					rules={[{ required: true}]}
		>
			<Input required {...input} className="todo"/>
		</Form.Item>
  );
};
const InputTime=({input,label})=>{
  return(
    <Form.Item
					label={label}
					rules={[{ required: true}]}
		>
			<Input {...input}/>
		</Form.Item>
  );
};
let ReduxForm = props => {
  const {t}=useTranslation();
  const { handleSubmit,state,reset} = props;
  return (
    <Row justify="center">
      <Col lg={{span:15}} xs={{span:18}}>
        <form onSubmit={handleSubmit}>
        <Field name="id" component="input" type="hidden"/>
        <div>
          <Field name="name" component={InputToDo} label={t("label_todo")}/>
        </div>
        <div>
          <Field name="job" component={InputTime} label={t("label_time")}/>
        </div>
        <Button id="submit_btn" type="primary" htmlType="submit" loading={state.loading} danger={state.danger} disabled={state.loading} className="btn">{state.btnText==='Edit'?t("btn_Edit"):t("btn_Add")}</Button>
        <Button onClick={reset} disabled={state.loading}>{t("btn_Reset")}</Button>
        </form>
      </Col>
    </Row>
    
  );
};
ReduxForm.propTypes={
    handleSubmit:PropTypes.func,
    state:PropTypes.object
};
InputToDo.propTypes={
    label:PropTypes.string,
    input:PropTypes.object
};
InputTime.propTypes={
  label:PropTypes.string,
  input:PropTypes.object
};
ReduxForm = reduxForm({
  // a unique name for the form
  form: 'contact',
  enableReinitialize:true
})(ReduxForm);
ReduxForm=connect(
  state=>({
    initialValues:state.todos.input_data
  }),{Add:addToDo,Init:init}
)(ReduxForm);
export default ReduxForm;