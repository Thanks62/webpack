import React from 'react';
import { Button,Table,Space } from 'antd';
import PropTypes from 'prop-types';
import './App.css';
const { Column } = Table;

const Tables = ({data,onRemove,onEditClick}) => {
        return (
            <Table dataSource={data} >
				<Column title="To Do" dataIndex="name" key="id" />
				<Column title="Time" dataIndex="job" key="id" />
				<Column title="Operation" 
					render={(record) => (
							<Space size="middle">
								<Button type="text" onClick={() => onEditClick(record.id,record.name,record.job)}>Edit</Button>
								<Button type="text" onClick={() => onRemove(record.id)}>Delete</Button>
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