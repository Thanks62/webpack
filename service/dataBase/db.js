const mysql=require('mysql');
const config={
	host:'localhost',
	user:'root',
	port: '3306',
	password:'123456',
	database:'test'
};
module.exports = {
    query : function(sql,callback){
		const connection=mysql.createConnection(config);
        connection.connect(function(err){
            if(err){
                console.log('connect Failed');
                throw err;
            }
			connection.query( sql, function(err,results){
				if(err){
					console.log('query Failed');
					throw err;
				}
				callback && callback(JSON.parse(JSON.stringify(results)));
				connection.end(function(err){
					if(err){
						console.log('close Failed');
						throw err;
					}
				});
           });
       });
    }
};