const express = require('express');
var mysql = require('mysql');
const app = express();
const port = 3000;

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "abc123",
    database: "Hats",
  });

// checks connection to database
con.connect(function(err) {
	if (err) {
  		console.error('Error Connecting to DB...' +err.stack);
  		return;
  	}
  	console.log("Connected!");
});


app.listen(port, () => {
	console.log('Incoming Request');
});


