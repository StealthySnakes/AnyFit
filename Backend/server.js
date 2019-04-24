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
			res.send("null");
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
		console.log("Incoming request for friends data...");
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
			res.send('https://via.placeholder.com/150');
		}
		console.log("Incoming request for user avatar...");
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
		console.log("Incoming request for user bio...");
	});
});

//Return all exercises
app.get('/exercises/', (req, res) => {
con.query('SELECT exercise_name FROM exercise;' , function (error, results, fields) {
	if (error)
	throw error;
res.send(results);
console.log("Incoming request for exercise name... ");
	});
});

//Return exercise image url!
app.get('/exerciseName/:workout_id', (req, res) => {
con.query('SELECT exercise_image FROM exercise WHERE workout_id = '+ req.params['workout_id'] + ';' , function (error, results, fields) {
	if (error)
	throw error;
res.send(results);
console.log("Incoming request for exercise image...");
	});
});

app.get('/exercises/workout_info', (req, res) => {
con.query('SELECT * FROM workout_info;' , function (error, results, fields) {
	if (error)
	throw error;
res.send(results);
console.log("Incoming request for workout_info... ");
	});
});

app.put('/exercises/:workout_id/set_count/:set_count', (req, res) => {
con.query('UPDATE workout_info SET set_count = '+ req.params['set_count'] +' WHERE workout_id = '+ req.params['workout_id'] + ';' , function (error, results, fields) {
	if (error)
	throw error;
res.send(results);
console.log("Incoming request to update workout_id's set count...");
	});
});

app.put('/exercises/:workout_id/rep_count/:rep_count', (req, res) => {
con.query('UPDATE workout_info SET rep_count = '+ req.params['rep_count'] +' WHERE workout_id = '+ req.params['workout_id'] + ';' , function (error, results, fields) {
	if (error)
	throw error;
res.send(results);
console.log("Incoming request to update workout_id's rep count...");
	});
});

app.put('/exercises/:workout_id/workout_length/:workout_length', (req, res) => {
con.query('UPDATE workout_info SET workout_length = '+ req.params['workout_length'] +' WHERE workout_id = '+ req.params['workout_id'] + ';' , function (error, results, fields) {
	if (error)
	throw error;
res.send(results);
console.log("Incoming request to update workout_id's workout length...");
	});
});

app.put('/exercises/:workout_id/workout_desc/:workout_desc', (req, res) => {
con.query('UPDATE workout_info SET workout_desc = '+ req.params['workout_desc'] +' WHERE workout_id = '+ req.params['workout_id'] + ';' , function (error, results, fields) {
	if (error)
	throw error;
res.send(results);
console.log("Incoming request to update workout_id's workout desc...");
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

app.get('/home/username/:username', (req,res) => {
	con.query('SELECT COUNT(1) as user FROM user_info WHERE username = \'' + req.params['username'] + '\';', function(error,results,fields) {
		if(error)
			throw error;
		if(results[0].user == 1){
			res.send('Username already taken');
		}
		else if(results[0].user == 0){
			res.send('');
		}
		else{
			res.send('error');
		}
	});
	console.log('Incoming username validation...');
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
