/* eslint-disable*/
const getTodo=require('../dataSource/data');
const fs=require('fs');
const path=require('path');
//读文件
exports.excute=function(req,res){
    fs.readFile('service/dataSource/data.json', 'utf8' , (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        res.send(JSON.parse(data));
      });
};
//添加
exports.addData=function(req,res){
    let todo={
        "id":req.body.id,
        "name":req.body.todo,
        "job":req.body.time
    };
    readAndWrite(function(data){
        let dataNew=JSON.parse(data);
        dataNew.push(todo);
        return dataNew;
    });
    
};
//编辑
exports.editData=function(req,res){
    readAndWrite(function(data){
        return JSON.parse(data).map((td)=>{
            if(td.id===req.body.id){
                td.name=req.body.todo;
                td.job=req.body.time;
            }
            return td;
        });
    });
    
};
//删除
exports.deleteData=function(req,res){
    readAndWrite(function(data){
        return JSON.parse(data).filter((td)=>{
            return td.id!==req.body.id;
        });
    });
};
//读写操作
function readAndWrite(callback){
    fs.readFile('service/dataSource/data.json', 'utf8' , (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        let todo=callback(data);
        let content=JSON.stringify(todo);
        fs.writeFile('service/dataSource/data.json',content,err=>{
            console.log(err);
        });
    });
}