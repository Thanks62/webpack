import React, {Component} from 'react';
import './Form.css'
import { Form, Input, Button} from 'antd';
import store from './store/index'
class Forms extends Component{
	state={}
	constructor(props) {
	    super(props);
	    this.initialState = {
			btnText:'Add',
			err:false,
			danger:false,
			id:new Date(),
			name: '',
			job: '',
	    };
		this.state = this.initialState;
		//监听状态变化
		store.subscribe(()=>{
			setTimeout(()=>{
				if(this.props.input_data.name !=''&&!this.props.Loading&&!this.state.err){
					this.setState({
						id:this.props.input_data.id,
						name:this.props.input_data.name,
						job:this.props.input_data.job,
						btnText:'Edit'
					})
				}
			},100)
		})
	}
	handleChange = event => {
        const { name, value } = event.target;
        this.setState({
			[name] : value
		});
	}
	onFinish = () => {	
		this.props.onLoading();
		setTimeout(()=>{
			//随机生成错误
			let err=Math.random();
			switch(true){
				case err<0.5:this.setState({err:false});break;
				default:this.setState({err:true});break;
			}
			//错误
			if(this.state.err){
				this.props.onFail();
				this.setState({
					btnText:'Failed',
					danger:true,
					id:new Date()
				})
			}
			//成功提交
			else{
				if(this.state.btnText==='Add')
					this.props.onAdd(this.state.name,this.state.id,this.state.job);
				else if(this.state.btnText==='Edit')
					this.props.onEdit(this.state.id,this.state.name,this.state.job);
				this.props.onFinishData();
				this.setState({
					btnText:'Successfully'
				})
			}
			//状态复原
			setTimeout(()=>{
				this.setState({
					id:new Date(),
					btnText:'Add',
					danger:false,
					err:false
				})
			},1000)
		},2000)
	}
	render(){
		return(
		<center>
			<Form onFinish={this.onFinish}>
				<Input name="id" id="ID" value={this.state.id} defaultValue={new Date().toString()} type="hidden"/>
				<Form.Item
					label="Todo"
					rules={[{ required: true}]}
				>
					<Input name="name" value={this.state.name} required  onChange={this.handleChange}/>
				</Form.Item>
				<Form.Item
					label="Time"
				>
					<Input name="job" value={this.state.job}  onChange={this.handleChange}/>
				</Form.Item>
			    <Button type="primary" htmlType="submit" loading={this.props.Loading} disabled={this.props.Loading} danger={this.state.danger}>
			        {this.state.btnText}
			    </Button>
			</Form>
		</center>)
	}
}
export default Forms;