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
			loading:false,
			danger:false,
			id:new Date(),
			name: '',
			job: '',
	    };
		this.state = this.initialState;
		store.subscribe(()=>{
			setTimeout(()=>{
				if(this.props.input_data){
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
		console.log(this.props);
		this.setState({
			loading:true
		})
		setTimeout(()=>{
			if(this.state.err){
				this.setState({
					loading:false,
					btnText:'Failed',
					danger:true,
				})
			}
			else{
				console.log(this.state);
				if(this.state.btnText==='Add')
					this.props.onAdd(this.state.name,this.state.id,this.state.job);
				else if(this.state.btnText==='Edit')
					this.props.onEdit(this.state.id,this.state.name,this.state.job);
				this.state.id=new Date();
				this.setState({
					loading:false,
					btnText:'Successfully'
				})
			}		
			setTimeout(()=>{
				this.setState({
					btnText:'Add',
					danger:false
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
			    <Button type="primary" htmlType="submit" loading={this.state.loading} disabled={this.state.loading} danger={this.state.danger} onChange={this.handleChange}>
			        {this.state.btnText}
			    </Button>
			</Form>
		</center>)
	}
}
export default Forms;