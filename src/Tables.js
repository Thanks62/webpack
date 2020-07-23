import React from 'react';
import { Button,Table,Space } from 'antd';
import PropTypes, { func } from 'prop-types';
import './App.css';
const { Column } = Table;
import {useTranslation} from 'react-i18next'; 
var firstRender=true;//判断是否为第一次渲染页面，防止dispatch重复调用
const Tables = ({data,onRemove,onEditClick,onInit}) => {
	var initState={};
	function init(){
			fetch('http://localhost:8888/getData').then(function(response) {
			if (response.ok) {
				response.json().then(function(data) {
				var list=data;
				initState=list?{
					data:list,
					input_data:{
						id:'',
						name:'',
						job:''
					},
					editing:false
					}:{
						data:[],
						input_data:{},
						editing:false
					};
					if(firstRender){
						onInit(initState.data,initState.input_data,initState.editing);
						firstRender=false;
					}
				});
			} else {
				console.log(response.status);
				}
			}, function(e) {
				console.log("Fetch failed!", e);
			});
		
	}
	init();
		const {t}=useTranslation();
        return (
			<div>
            <Table dataSource={data} >
				<Column title={t("label_todo")} dataIndex="name" key="id" />
				<Column title={t("label_time")} dataIndex="job" key="id" />
				<Column title={t("operation")} 
					render={(record) => (
							<Space size="middle">
								<Button type="text" onClick={() => onEditClick(record.id,record.name,record.job)}>{t("btn_Edit")}</Button>
								<Button type="text" onClick={() => onRemove(record.id)}>{t("btn_Delete")}</Button>
							</Space>
					)}
				/>
			</Table>
			</div>
		);
};
Tables.propTypes={
	data:PropTypes.array,
	onRemove:PropTypes.func,
	onEditClick:PropTypes.func
};

export default Tables;