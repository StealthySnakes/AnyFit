const express = require('express');
var mysql = require('mysql');
const app = express();
const port = 3000;

app.get('/home/:login/password/:password', (req, res) => {
	con.query('SELECT user_id FROM user_info WHERE user_id =' + req.params["login"] + ' AND _password =' + req.params["password"] + "'" , function (error, results, fields) {
    if (error)
		throw error;
	res.send(results);
    });
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


