import React from 'react';
import { Button } from 'antd';
import './App.css';
import './Table.css'

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>To Do</th>
                <th>Time</th>
                <th>Operation</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    if(props.characterData){
    	const rows = props.characterData.map((row, index) => {
    	    return (
    			<tr key={index}>
    				<td>{row.name}</td>
    				<td>{row.job}</td>
    				<td>
    	                <Button type="text" onClick={() => props.editList(index)}>Edit</Button>
    	                <Button type="text" onClick={() => props.removeCharacter(index,row.id)}>Delete</Button>
    	            </td>
    			</tr>
    	    );
    	});
    	
    	return <tbody>{rows}</tbody>;
    }
    return <tbody></tbody>;
}

const Table = (props) => {
    const { characterData, removeCharacter,editList } = props;
        return (
            <table>
                <TableHeader />
                <TableBody editList={editList} characterData={characterData} removeCharacter={removeCharacter} />

            </table>
        );
}

export default Table;