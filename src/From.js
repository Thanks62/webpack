import React, {Component} from 'react';
import './Form.css'
import { Form, Input, Button} from 'antd';

class Forms extends Component {
	state={
		loading:false,
		btnText:'',
		btnDisable:false,
		danger:false,
		err:true
	}
    constructor(props) {
        super(props);
        this.initialState = {
			id:new Date(),
			name: '',
			job: '',
			btnText:'Add',
			err:true
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
			[name] : value
		});
		
    }
	componentDidMount(){
		this.props.onRef(this);
	}
    edit=(name,id,job)=>{
		console.log(name);
		this.setState({
			id:id,
			name:name,
			job:job,
			btnText:'Edit'
		})
	}

    render() {
		const {btnText}=this.state;
		const onFinish = () => {
			setTimeout(() => {
				this.setState({
					loading:false,
					btnDisable:false,
				})
				if(this.state.err){
					this.setState({
						loading:false,
						btnDisable:false,
						danger:true,
						btnText:'Failed',
						id:new Date(),
						name: '',
						job: '',
					})
					setTimeout(()=>{
						this.setState({
							btnText:'Add',
							danger:false
						})
					},1000)
				}
				else{
					const storage=window.localStorage;
					let list=[];
					list=JSON.parse(storage.getItem("list"));
					//去掉原有数据（edit情况）
					list=list.filter((li)=>{
						return li.id!=this.state.id;
					})
					//新增当前数据
					if(list) list.push(this.state);
					else list=[this.state];
					storage.setItem("list",JSON.stringify(list));
					this.setState({
						id : document.getElementById('ID').value,
						btnText:'Successfully'
					});
					this.props.handleSubmit(this.state);
					setTimeout(()=>{
						this.setState(this.initialState);
					},1000)
					
					this.props.init();
				}
				
			}, 2000);
            this.setState({
				loading:true,
				btnDisable:true,
				danger:false
			})
		  };
        return (
			<center>
				<Form onFinish={onFinish}>
					<Input name="id" id="ID" value={this.state.id} type="hidden"/>
					<Form.Item
						label="Todo"
						rules={[{ required: true}]}
					>
						<Input name="name" required value={this.state.name} onChange={this.handleChange} />
					</Form.Item>
					<Form.Item
						label="Time"
					>
						<Input name="job" value={this.state.job} onChange={this.handleChange}/>
					</Form.Item>
				    <Button type="primary" htmlType="submit" loading={this.state.loading} disabled={this.state.btnDisable} danger={this.state.danger}>
				        {this.state.btnText}
				    </Button>
				</Form>
			</center>
            
        );
    }
}

export default Forms;