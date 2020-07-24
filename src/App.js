import React, { Component,Suspense } from 'react';
import { Row,Col, Divider,Card,Select} from 'antd';
import './App.css';
import ToDoList from './container/ToDoList';
import AddToDo from './container/AddToDo';
import {withTranslation} from 'react-i18next';
const { Option } = Select;
class AppComponent extends Component{
//function App(){	
	//const {t,i18n}=useTranslation();
	changeLang=(value)=>{
		//const {i18n}=useTranslation();
		this.props.i18n.changeLanguage(value);
	};
	render(){
		const {t}=this.props;
		return(
				<Row justify="center" align="middle" >
					<Col lg={{span:12}} md={{span:14}} xs={{span:24}} sm={{span:16}}>
						<Card className="Content">
							<Row gutter={[0,16]}>
								<Col offset={1}>
								<div className="langOpt">
								language:
									<Select onChange={this.changeLang} defaultValue="English">
										<Option value="ch">简体中文</Option>
										<Option value="en">English</Option>
									</Select>
								</div>
								</Col>
							</Row>
							<Row justify="center">
							<Col lg={{span:24}} md={{span:24}} xs={{span:24}} sm={{span:24}}>
								<div className="container">
									<h1>{t('title')}</h1>
									<p>{t("subTitle")}</p>
									<ToDoList></ToDoList>
									<Divider orientation="center">{t("addNew")}</Divider>
									<AddToDo></AddToDo>
								</div>
							</Col>
							</Row>
						</Card>
					</Col>
				</Row>
			);
	}
}
const MyComponent=withTranslation()(AppComponent);
export default function App() {
	return(
		<Suspense fallback="loading">
			<MyComponent></MyComponent>
		</Suspense>
	);
}