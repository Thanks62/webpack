import React, {Component} from 'react';
import './Form.css';
import store from './store/index';
import ReduxForm from './ReduxForm';
import PropTypes from 'prop-types';
class Forms extends Component{
	/*state={}
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
			console.log(this.props)
			setTimeout(()=>{
				this.id.state.value=this.props.input_data.id;
				this.name.state.value=this.props.input_data.name;
				this.job.state.value=this.props.input_data.job;
				if(this.props.editing&&!this.props.Loading&&!this.state.err){
					this.setState({
						btnText:'Edit'
					})
				}
			},200)
		})
	}
	handleChange = event => {
        const { name, value } = event.target;
        this.setState({
			[name] : value
		});
		this.props.onChangeInput(this.id.state.value,this.name.state.value,this.job.state.value)
	}
	onFinish = () => {	
		this.props.onChangeInput(this.id.state.value,this.name.state.value,this.job.state.value)
		console.log(this.name.state.value)
		console.log(this.props.input_data)
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
					danger:true
				})
			}
			//成功提交
			else{
				if(this.state.btnText==='Add')
					this.props.onAdd(this.props.input_data.name,this.props.input_data.id,this.props.input_data.job);
				else if(this.state.btnText==='Edit')
					this.props.onEdit(this.props.input_data.id,this.props.input_data.name,this.props.input_data.job);
				this.props.onFinishData();
				this.setState({
					btnText:'Successfully'
				})
			}
			//状态复原
			setTimeout(()=>{
				this.props.onChangeInput(new Date(),this.name.state.value,this.job.state.value)
				this.setState({
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
				<Input name="id" id="ID" defaultValue={new Date().toString()}  ref={(id)=>{return this.id=id}} type="hidden"/>
				<Form.Item
					label="Todo"
					rules={[{ required: true}]}
				>
					<Input name="name" required  ref={(name)=>{return this.name=name}}/>
				</Form.Item>
				<Form.Item
					label="Time"
				>
					<Input name="job" ref={(job)=>{return this.job=job}}/>
				</Form.Item>
			    <Button type="primary" htmlType="submit" loading={this.props.Loading} disabled={this.props.Loading} danger={this.state.danger}>
			        {this.state.btnText}
			    </Button>
			</Form>
		</center>)
	}*/
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