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

app.use('/static', express.static('public'));

app.get('/user', (req, res) => {
	res.send("<h1>Hello World!!</h1>");
	con.query('SELECT * FROM pet', function (error, results, fields) {
    if (error)
        throw error;

    results.forEach(result => {
        console.log(result);
    });
});
	console.log('Incoming request ...');
});

app.listen(port, () => {
	console.log('Incoming Request');
});

app.post('/user', (req, res) => {
	res.send("Hello post request");
	conosole.log('Incomnig request ...')
});

app.get('/user/:userid', (req, res) => {
	//res.send('{"name":"Austin Miller","id":"47351867"}');
	res.send(req.params);
});

app.get('/user/:userid/range/:from-:to', (req, res) => {
	res.send(req.params);
});

app.get('/data', (req,res) => {
	res.send(req.query);
});


//app.get('/usr/userid/newrange')