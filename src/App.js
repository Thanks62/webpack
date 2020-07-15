import React, { Component } from 'react';
import { Row,Col, Divider,Card } from 'antd';
import './App.css'
import ToDoList from './container/ToDoList'
import AddToDo from './container/AddToDo'
class App extends Component{
	render(){
		return(
				<Row justify="center" align="middle">
				    <Col>
				        <Card className="Content">
				            <div className="container">
				                <h1>List</h1>
				                <p>A Todo List</p>
								<ToDoList></ToDoList>
				                <Divider orientation="center">Add New</Divider>
								<AddToDo></AddToDo>
							</div>
				        </Card>
				    </Col>
				</Row>
			)
	}
	
	
}
export default App;