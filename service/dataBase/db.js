const mysql=require('mysql');
const connection=mysql.createConnection({
	host:'localhost',
	user:'root',
	port: '3306',
	password:'123456',
	database:'test'
});
module.exports = {
    query : function(sql,params,callback){
        connection.connect(function(err){
            if(err){
                console.log('Failed');
                throw err;
            }
			connection.query( sql, params, function(err,results,fields ){
				if(err){
					console.log('Failed');
					throw err;
				}
				callback && callback(JSON.parse(JSON.stringify(results)));
				connection.end(function(err){
					if(err){
						console.log('Failed');
						throw err;
					}
				});
           });
       });
    }
};