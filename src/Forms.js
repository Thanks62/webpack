import React, {Component} from 'react';
import './Form.css';
import store from './store/index';
import ReduxForm from './ReduxForm';
import PropTypes from 'prop-types';
class Forms extends Component{
	constructor(props) {
		super(props);
		this.initialState = {
			btnText:'Add',
			danger:false,
			loading:false
		};
		this.state = this.initialState;
		//监听状态变化
		store.subscribe(()=>{
			setTimeout(()=>{
				if(this.props.editing&&!props.Loading){
					this.setState({
						btnText:'Edit'
					});
				}
			},200);
		});
	}
	submit=(value)=> {
		this.setState({
			loading:true
		});
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				let err=Math.random();
				switch(true){
					case err<0.5:resolve();break;
					default:reject("error");break;
				}
			},1000);
		}).then(
			()=>{
				setTimeout(()=>{
					if(this.props.input_data.id){
						this.props.onEdit(value.id,value.name,value.job);
					}
					else
						this.props.onAdd(value.name,new Date(),value.job);
					this.props.onChangeInput('','','');
					this.setState({
						btnText:'Add',
						loading:false,
						danger:false
					});
				},1000);
			},
			()=>{
				this.setState({
					danger:true,
					loading:false
				});
				setTimeout(()=>{
					this.setState({
						loading:false,
						danger:false
					});
				},1000);
			}
		);
		}
		render() {
			return <ReduxForm onSubmit={this.submit} state={this.state}/>;
		}
}
Forms.protoTypes={
	editing:PropTypes.bool,
	Loading:PropTypes.bool,
	onAdd:PropTypes.func,
	onEdit:PropTypes.func,
	onChangeInput:PropTypes.func
};
export default Forms;