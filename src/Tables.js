import React from 'react';
import { Button,Table,Space } from 'antd';
import PropTypes from 'prop-types';
import './App.css';
const { Column } = Table;
import {useTranslation} from 'react-i18next'; 

const Tables = ({data,onRemove,onEditClick}) => {
		const {t}=useTranslation();
        return (
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
		);
};
Tables.propTypes={
	data:PropTypes.array,
	onRemove:PropTypes.func,
	onEditClick:PropTypes.func
};

export default Tables;