
const express = require('express');
var mysql = require('mysql');
const app = express();
const port = 3000;

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "dev",
    password: "anyfit0987",
    database: "anyfit",
  });

  con.connect(function(err) {
	if (err) {
  		console.error('Error Connecting to DB...' +err.stack);
  		return;
  	}
  	console.log("Connected!");
});
