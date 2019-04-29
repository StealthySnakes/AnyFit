 'use strict';

const mysql = require('mysql');
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

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

//create user
app.put('newuser/:name/:username/:password/:avatar', (req,res) => {
	var userId;
 	 con.query('SELECT MAX(user_id) FROM user_info;', function (error, results, fields) {
    		if(error)
    		throw error;
    		userId = results + 1;
  	});
	con.query('INSERT INTO user_info VALUES(' + userId + ',\'' + req.params['username'] + '\',\'' + req.params['name'] + '\',\'' + req.params['password'] + '\',\'' + req.params['avatar'] + ',\'\')', function(error,results,fields) {
		if(error)
		throw error;
		res.send(results);
		console.log('Incoming request to create user...');
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

app.put('/exercises/:userID/workout_id/:workout_id/favorite/:favorite', (req, res) => {
con.query('UPDATE user_workout SET favorite_workout = '+ req.params['favorite'] +' WHERE user_id = '+ req.params['userID'] + ' AND workout_id = ' + req.params['workout_id'] + ';' , function (error, results, fields) {
	if (error)
	throw error;
res.send(results);
console.log("Incoming request to update user_workout's favorite_workout...");
	});
});

//Return list of favorite workouts
app.get('/home/:userID/favorite_workout', (req, res) => {
con.query('SELECT favorite_workout FROM user_workout WHERE user_id = \'' + req.params['userID'] + "\';" , function (error, results, fields) {
	if (error)
	throw error;
res.send(results);
console.log(results);
	});
});

//Return all exercises
app.get('/exerciseNames/', (req, res) => {
con.query('SELECT exercise_name FROM exercise;' , function (error, results, fields) {
	if (error)
	throw error;
res.send(results);
console.log("Incoming request for exercise name... ");
	});
});

//Return exercise image url!
app.get('/exerciseName/:exercise_name', (req, res) => {
con.query('SELECT exercise_image FROM exercise WHERE exercise_name = \''+ req.params['exercise_name'] + '\' ;' , function (error, results, fields) {
	if (error)
	throw error;
res.send(results);
console.log(results);
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

app.put('/exercises/:workout_id/workout_name/:workout_name', (req, res) => {
con.query('UPDATE workout_info SET workout_name = '+ req.params['workout_name'] +' WHERE workout_id = '+ req.params['workout_id'] + ';' , function (error, results, fields) {
	if (error)
	throw error;
res.send(results);
console.log("Incoming request to update workout_id's workout name...");
	});
});

app.put('/exercises/:workout_id/rating/:rating', (req, res) => {
con.query('UPDATE workout_info SET rating = '+ req.params['rating'] +' WHERE workout_id = '+ req.params['workout_id'] + ';' , function (error, results, fields) {
	if (error)
	throw error;
res.send(results);
console.log("Incoming request to update workout_id's rating...");
	});
});

app.put('/exercises/:workout_id/category/:category', (req, res) => {
con.query('UPDATE workout_info SET category = '+ req.params['category'] +' WHERE workout_id = '+ req.params['workout_id'] + ';' , function (error, results, fields) {
	if (error)
	throw error;
res.send(results);
console.log("Incoming request to update workout_id's category...");
	});
});

app.put('/exercises/:workout_id/intensity/:intensity', (req, res) => {
con.query('UPDATE workout_info SET intensity = '+ req.params['intensity'] +' WHERE workout_id = '+ req.params['workout_id'] + ';' , function (error, results, fields) {
	if (error)
	throw error;
res.send(results);
console.log("Incoming request to update workout_id's intensity...");
	});
});

app.put('/exercises/:workout_id/explevel/:ExpLevel', (req, res) => {
con.query('UPDATE workout_info SET ExpLevel = '+ req.params['ExpLevel'] +' WHERE workout_id = '+ req.params['workout_id'] + ';' , function (error, results, fields) {
	if (error)
	throw error;
res.send(results);
console.log("Incoming request to update workout_id's ExpLevel...");
	});
});

app.put('/exercises/:workout_id/comments/:comments', (req, res) => {
con.query('UPDATE workout_info SET comments = '+ req.params['comments'] +' WHERE workout_id = '+ req.params['workout_id'] + ';' , function (error, results, fields) {
	if (error)
	throw error;
res.send(results);
console.log("Incoming request to update workout_id's comments...");
	});
});

app.put('/exercises/:workout_id/visibility/:visibility', (req, res) => {
con.query('UPDATE workout_info SET visibility = '+ req.params['visibility'] +' WHERE workout_id = '+ req.params['workout_id'] + ';' , function (error, results, fields) {
	if (error)
	throw error;
res.send(results);
console.log("Incoming request to update workout_id's visibility...");
	});
});

//return workout by workout_id
app.get('/workout/:workout_id', (req,res) => {
	var workout_id = parseInt(req.params['workout_id']);
	con.query('SELECT DISTINCT * from workout_info NATURAL JOIN user_workout NATURAL JOIN exercise WHERE workout_id = ' + workout_id + ' ;', function(error,results,fields) {
		if(error)
			throw error;
	res.send(results);
	console.log("Incoming request for workout...");
	});
});

app.get('/focus/:focus/expertise/:expertise/length/:length/intensity/:intensity', (req, res) => {
con.query('SELECT exercise_name, rep_count, set_count, default_length FROM exercise NATURAL JOIN workout_info NATURAL JOIN user_workout WHERE category = \'' + req.params['focus'] + '\' AND ExpLevel = \'' + req.params['expertise'] + '\' AND workout_length = \'' + req.params['length'] + '\' AND intensity = \'' + req.params['intensity'] + "\';" , function (error, results, fields) {
  if (error)
  throw error;
res.send(results);
console.log(results);
  });
});

//Return Workout ID for newly created Workout
app.post('/newWorkoutId/:workoutObject' , (req, res) => {
  var obj = req.params['workoutObject'];
  var maxWorkout = 0;
  con.query('SELECT MAX(workout_id) FROM workout_info;', function (error, results, fields) {
    if(error)
    throw error;
    maxWorkout = results + 1;
  });
  con.query('INSERT INTO user_workout (user_id, workout_id, past_workout, favorite_workout, custom_workout, workout_counter, workout_length, workout_desc, workout_name, rating, category, intensity, ExpLevel, comments, visibility, Time_stamp) VALUES ( \'' + obj['userID'] + '\', \'' + maxWorkout + '\', null, null, null, null, null, \'' + obj['workoutDesc'] + '\' , \'' + obj['workoutName'] + '\', null, null, \'' + obj['intensity'] + '\', \'' + obj['experience'] + '\', null, null, CURRENT_TIMESTAMP);', function (error, results, fields) {
    if(error)
    throw error;
    res.send(maxWorkout);
    console.log(maxWorkout);
  });
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
