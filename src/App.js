import React, { Component } from 'react';
import { Row,Col, Divider,Card } from 'antd';
import './App.css'
import Forms from './From'
import Table from './Table'
class App extends Component{
    state = {
        characters: [],
        edit:[]
    };
    constructor(props){
        super(props);
        this.init();
    }
    init=()=>{
        if(window.localStorage){
            const storage=window.localStorage;
            let list=storage.getItem("list");
            this.state.characters=JSON.parse(list);
        }
        
        
    }
    removeCharacter = (index,id) => {
        const { characters } = this.state;
        const storage=window.localStorage;
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
        storage.removeItem(id);
    }

    editList = (index)=>{
        var list=this.state.characters.filter((character, i) => { 
            return i === index;
        })
        this.state.edit=[{
            id:list[0].id,
            name:list[0].name,
            job:list[0].job
        }];
        console.log(this.state.edit);
        this.form.edit(list[0].name,list[0].id,list[0].job);
    }
    onRef=(ref)=>{
        this.form=ref;
    }

    handleSubmit = (character) => {
       this.init();
    }
    render(){
        const { characters,edit } = this.state;
        return(<Row justify="center" align="middle">
        <Col>
            <Card style={{width:600}} className="Content">
                <div className="container">
                    <h1>List</h1>
                    <p>A Todo List</p>
                    <Table characterData={characters}
                            removeCharacter={this.removeCharacter}
                            editList={this.editList}></Table>
                    <Divider orientation="center">Add New</Divider>
                    <Forms  handleSubmit={this.handleSubmit} onRef={this.onRef}/>
                </div>
            </Card>
        </Col>
    </Row>)
    }
}
export default App;