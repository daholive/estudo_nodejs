var mysql = require('mysql');

function createDBConnection(){
	return mysql.createConnection({
		    host: 'localhost',
	   	    user: 'daholive',
	   	    password: '2222',
	        database: 'nodejs'
	});
}

//wrapper
module.exports = function(){
	return createDBConnection;
}