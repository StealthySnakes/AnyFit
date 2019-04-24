 'use strict';

const mysql = require('mysql');
const express = require('express');
const app = express();
const port = 3000;

app.post('/home/:login/password/:password', (req, res) => {
	con.query('SELECT user_id FROM user_info WHERE username = \'' + req.params['login'] + '\' AND _password =\'' + req.params['password'] + "\';" , function (error, results, fields) {
    if (error){
			throw error;
		}
		if(results.length >= 1){
			res.send(results);
		}
		else {
			res.send("null")
		}

	console.log("Incoming login request...");
  });
});

//return user's friends
app.get('/home/:userID', (req,res) => {
	con.query('SELECT f_username,friend_id FROM friends WHERE user_id = ' + req.params['userID'] + ' ;', function(error,results,fields) {
		if (error){
			throw error;
		}
		if(results.length >= 1){
			res.send(results);
		}
		console.log("Incoming request for friends data...")
	});
});

//return user's avatar
app.get('/home/:userID/avatar', (req,res) =>{
	con.query('SELECT avatar FROM user_info WHERE user_id = ' + req.params['userID'] + ' ;', function(error,results,fields) {
		if (error){
			throw error;
		}
		if(results.length >= 1){
			res.send(results);
		}
		else {
			res.send('https://via.placeholder.com/150')
		}
		console.log("Incoming request for user avatar...")
	});
});

//return user bio
app.get('/home/:userID/bio', (req,res) =>{
	con.query('SELECT user_bio FROM user_info WHERE user_id = ' + req.params['userID'] + ' ;', function(error,results,fields) {
		if (error){
			throw error;
		}
		if(results.length >= 1){
			res.send(results);
		}
		else {
			res.send("");
		}
		console.log("Incoming request for user bio...")
	});
});

//Return all exercises
app.get('/exercises', (req, res) => {
con.query('SELECT exercise_name FROM exercise;' , function (error, results, fields) {
	if (error)
	throw error;
res.send(results);
console.log("Incoming request for exercise name... ");
	});
});

//Return exercise image url
app.get('/exerciseName/:exerciseName', (req, res) => {
con.query('SELECT exercise_image FROM exercise WHERE exercise_name = \'' + req.params['exerciseName'] + "\';" , function (error, results, fields) {
	if (error)
	throw error;
res.send(results);
console.log("Incoming request for exercise image...");
	});
});

//Return exercises with specified set
app.get('/focus/:focus/expertise/:expertise/length/:length/intensity/:intensity', (req, res) => {
con.query('SELECT exercise_name, rep_count, set_count, default_length FROM exercise NATURAL JOIN workout_info WHERE category = \'' + req.params['focus'] + '\' AND ExpLevel = \'' + req.params['expertise'] + '\' AND workout_length = \'' + req.params['length'] + '\' AND intensity = \'' + req.params['intensity'] + "\';" , function (error, results, fields) {
  if (error)
  throw error;
res.send(results);
console.log(results);
  });
});

app.get('/home',(req, res) => {
	res.send('<h1>Hello World</h1>');
	console.log('Incoming request for home...');
});

app.get('/WorkoutPage', (req, res) => {
  res.send('<h1> YOU READY TO WORKOUT BROTHER? </h1>');
  console.log('Workout page has been accessed');
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
