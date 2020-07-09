import React, {Component} from 'react';
import './Form.css'
import { Form, Input, Button} from 'antd';

class Forms extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
			id:new Date(),
			name: '',
            job: ''
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
			job:job
		})
	}

    render() {
		const onFinish = () => {
            const storage=window.localStorage;
            let list=[];
            list=JSON.parse(storage.getItem("list"));
            list=list.filter((li)=>{
                return li.id!=this.state.id;
            })
            if(list) list.push(this.state);
            else list=[this.state];
			storage.setItem("list",JSON.stringify(list));
			this.setState({
				id : document.getElementById('ID').value
			});
			this.props.handleSubmit(this.state);
			this.setState(this.initialState);	
			this.setState({
				id : new Date()
			});	
            window.location.reload();
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
				    <Button type="primary" htmlType="submit">
				        Add
				    </Button>
				</Form>
			</center>
            
        );
    }
}

export default Forms;