/* eslint-disable */
// 引入模块
var express = require('express');
var path = require('path');
var ejs = require('ejs');
const bodyParser=require('body-parser');
const { createProxyMiddleware } = require('http-proxy-middleware');

const option={
    target:'http://localhost:8888',
    changeOrigin:true
}
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
// 对/getData使用允许跨域响应头
app.use('/getData',function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','http://172.21.19.103:8888');
    next();
})
// 对/getData使用允许跨域中间件
// app.use('/getData',function(req,res,next){
//     createProxyMiddleware(option);
//     next();
// })
app.get('/getData', function (req, res) {
    //json数据库
    // const action=require('./service/action/getData');
    // action.excute(req,res);
    //mySQL数据库
	const db=require('./service/dataBase/db.js');
	db.query('SELECT * FROM todo',function(result){
		res.send(result);
	})
});
app.get('/', function (req, res) {
    res.render('index');
});
app.post('/getData',function(req,res){
    //const action=require('./service/action/getData');
    const db=require('./service/dataBase/db.js');
    switch (req.body.operation){
        //json数据库
        // case "add":action.addData(req,res);break;
        // case "edit":action.editData(req,res);break;
        // case "delete":action.deleteData(req,res);break;
        //mySQL数据库
        case "add":db.query('INSERT INTO `todo`(`id`, `name`, `job`) VALUES ("'+req.body.id+'","'+req.body.todo+'","'+req.body.time+'");');break;
        case "edit":db.query('UPDATE `todo` SET `name`="'+req.body.todo+'",`job`="'+req.body.time+'" WHERE `id`="'+req.body.id+'"');break;
        case "delete":db.query('DELETE from `todo` WHERE `id`="'+req.body.id+'"');break;
        default: break;
    }
    
    
})
// 设置views路径和模板
app.set('views', path.join(__dirname, 'dist/view'));
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
//设置静态资源目录
app.use(express.static(path.join(__dirname,'dist')));
// 启动一个服务，监听从8888端口进入的所有连接请求
var server = app.listen(8888, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('Listening at http://%s:%s', host, port);
}); 