'use strict';

const mysql = require('mysql');
const express = require('express');
const app = express();
const port = 3000;

app.get('/home/:login/password/:password', (req, res) => {
	con.query('SELECT user_id FROM user_info WHERE username = \'' + req.params['login'] + '\' AND _password =\'' + req.params['password'] + "\';" , function (error, results, fields) {
    if (error)
			throw error;
		if(results.length >= 1){
			res.send(results);
		}
		else {
			res.send(null)
		}
	
	console.log(results);
  });
});

app.get('/home',(req, res) => {
	res.send('<h1>Hello World</h1>');
	console.log('Incoming request for home...');
});

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "dev",
    password: "anyfit0987",
    database: "anyfit",
  });

// checks connection to database
con.connect(function(err) {
	if (err) {
  		console.error('Error Connecting to DB...' + err.stack);
  		return;
  	}
  	console.log("Connected!");
});


app.listen(port, () => {
	console.log('Incoming Request');
});

