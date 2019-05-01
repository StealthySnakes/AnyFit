 'use strict';

const mysql = require('mysql');
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

// Returns a user_id
app.post('/home/:login/password/:password', (req, res) => {

	console.log("Incoming login request...");

	try {
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
		});
	}
	catch(err){
		console.log(err);
	}
});

//create user
app.post('newuser/:name/:username/:password/:avatar', (req,res) => {

	console.log('Incoming request to create user...');

	try {
		con.query('INSERT INTO user_info VALUES(\'' + req.params['username'] + '\',\'' + req.params['name'] + '\',\'' + req.params['password'] + '\',\'' + req.params['avatar'] + ',\'\')', function(error,results,fields) {
			if(error)
				throw error;

		});
	}
	catch(err){
		console.log(err);
	}
	//select recently created user_id and return it
	con.query('SELECT max(user_id) as userID from user_info;', function(error,results,fields){
		var max = results[0].userID;
		res.send({userID: max});
	});
});



//return user's friends
app.get('/home/:userID', (req,res) => {

	console.log("Incoming request for friends data...");

	try{
		con.query('SELECT f_username,friend_id FROM friends WHERE user_id = ' + req.params['userID'] + ' ;', function(error,results,fields) {
			if (error){
				throw error;
			}
			if(results.length >= 1){
				res.send(results);
			}

		});
	}
	catch(err){
		console.log(err);
	}
});

//return user's avatar
app.get('/home/:userID/avatar', (req,res) =>{

	console.log("Incoming request for user avatar...");

	try{
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
		});
	}
	catch(err){
		console.log(err);
	}
});

//return user bio
app.get('/home/:userID/bio', (req,res) =>{

	console.log("Incoming request for user bio...");

	try{
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
		});
	}
	catch(err){
		console.log(err);
	}
});

// Set a workout as a favorite workout
app.put('/exercises/:userID/workout_id/:workout_id/favorite/:favorite', (req, res) => {

	console.log("Incoming request to update user_workout's favorite_workout...");

	try{
		con.query('UPDATE user_workout SET favorite_workout = '+ req.params['favorite'] +' WHERE user_id = '+ req.params['userID'] + ' AND workout_id = ' + req.params['workout_id'] + ';' , function (error, results, fields) {
			if (error)
				throw error;
		res.send(results);
		});
	}
	catch(err){
		console.log(err);
	}
});

//Return list of favorite workouts
app.get('/home/:userID/favorite_workout', (req, res) => {

  console.log("Incoming request for friends..");

	try{
		con.query('SELECT workout_id FROM user_workout WHERE user_id = \'' + req.params['userID'] + ' AND favorite_workout = 1 ' +  "\';" , function (error, results, fields) {
			if (error)
				throw error;
			res.send(results);
		});
	}
	catch(err){
		console.log(err);
	}
});

//Return all exercises
app.get('/exerciseNames/', (req, res) => {

	console.log("Incoming request for exercise name... ");

	try{
		con.query('SELECT exercise_name FROM exercise;' , function (error, results, fields) {
			if (error)
				throw error;
			res.send(results);
		});
	}
	catch(err){
		console.log(err);
	}
});

//Return exercise image url!
app.get('/exerciseName/:exercise_name', (req, res) => {

	console.log("Incoming request for exercise image...");

	try{
		con.query('SELECT exercise_image FROM exercise WHERE exercise_name = \''+ req.params['exercise_name'] + '\' ;' , function (error, results, fields) {
			if (error)
				throw error;
			res.send(results);
		});
	}
	catch(err){
		console.log(err);
	}
});

// Returns all information about the workout info
app.get('/exercises/workout_info', (req, res) => {

	console.log("Incoming request for workout_info... ");

	try{
		con.query('SELECT * FROM workout_info;' , function (error, results, fields) {
			if (error)
				throw error;
			res.send(results);
		});
	}
	catch(err){
		console.log(err);
	}
});

// modify set count
app.put('/exercises/:workout_id/set_count/:set_count', (req, res) => {

	console.log("Incoming request to update workout_id's set count...");

	try{
		con.query('UPDATE workout_info SET set_count = '+ req.params['set_count'] +' WHERE workout_id = '+ req.params['workout_id'] + ';' , function (error, results, fields) {
			if (error)
				throw error;
			res.send(results);
		});
	}
	catch(err){
		console.log(err);
	}
});

// Modify rep count
app.put('/exercises/:workout_id/rep_count/:rep_count', (req, res) => {

	console.log("Incoming request to update workout_id's rep count...");

	try{
		con.query('UPDATE workout_info SET rep_count = '+ req.params['rep_count'] +' WHERE workout_id = '+ req.params['workout_id'] + ';' , function (error, results, fields) {
			if (error)
				throw error;
			res.send(results);
		});
	}
	catch(err){
		console.log(err);
	}
});

// modify workout length
app.put('/exercises/:workout_id/workout_length/:workout_length', (req, res) => {

	console.log("Incoming request to update workout_id's workout length...");

	try{
		con.query('UPDATE workout_info SET workout_length = '+ req.params['workout_length'] +' WHERE workout_id = '+ req.params['workout_id'] + ';' , function (error, results, fields) {
			if (error)
				throw error;
			res.send(results);
		});
	}
	catch(err){
		console.log(err);
	}
});

// Modify workout description
app.put('/exercises/:workout_id/workout_desc/:workout_desc', (req, res) => {

	console.log("Incoming request to update workout_id's workout desc...");

	try{
		con.query('UPDATE workout_info SET workout_desc = '+ req.params['workout_desc'] +' WHERE workout_id = '+ req.params['workout_id'] + ';' , function (error, results, fields) {
			if (error)
				throw error;
			res.send(results);
		});
	}
	catch(err){
		console.log(err);
	}

});

// Modify workout name
app.put('/exercises/:workout_id/workout_name/:workout_name', (req, res) => {

	console.log("Incoming request to update workout_id's workout name...");

	try{
		con.query('UPDATE workout_info SET workout_name = '+ req.params['workout_name'] +' WHERE workout_id = '+ req.params['workout_id'] + ';' , function (error, results, fields) {
			if (error)
				throw error;
		res.send(results);
		});
	}
	catch(err){
		console.log(err);
	}
});

// Modify workout rating
app.put('/exercises/:workout_id/rating/:rating', (req, res) => {

	console.log("Incoming request to update workout_id's rating...");

	try{
		con.query('UPDATE user_workout SET rating = '+ req.params['rating'] +' WHERE workout_id = '+ req.params['workout_id'] + ';' , function (error, results, fields) {
			if (error)
				throw error;
		res.send(results);
		});
	}
	catch(err){
		console.log(err);
	}
});

// Modify workout category
app.put('/exercises/:workout_id/category/:category', (req, res) => {

	console.log("Incoming request to update workout_id's category...");

	try{
		con.query('UPDATE workout_info SET category = '+ req.params['category'] +' WHERE workout_id = '+ req.params['workout_id'] + ';' , function (error, results, fields) {
			if (error)
				throw error;
		res.send(results);
		});
	}
	catch(err){
		console.log(err);
	}
});

// Modify workout intensity
app.put('/exercises/:workout_id/intensity/:intensity', (req, res) => {

	console.log("Incoming request to update workout_id's intensity...");

	try{
		con.query('UPDATE workout_info SET intensity = '+ req.params['intensity'] +' WHERE workout_id = '+ req.params['workout_id'] + ';' , function (error, results, fields) {
			if (error)
				throw error;
		res.send(results);
		});
	}
	catch(err){
		console.log(err);
	}
});

// Modify workout ExpLevel
app.put('/exercises/:workout_id/explevel/:ExpLevel', (req, res) => {

	console.log("Incoming request to update workout_id's ExpLevel...");

	try{
		con.query('UPDATE workout_info SET ExpLevel = '+ req.params['ExpLevel'] +' WHERE workout_id = '+ req.params['workout_id'] + ';' , function (error, results, fields) {
			if (error)
				throw error;
		res.send(results);
		});
	}
	catch(err){
		console.log(err);
	}
});

// Modify workout comments
app.put('/exercises/:workout_id/comments/:comments', (req, res) => {

	console.log("Incoming request to update workout_id's comments...");

	try{
		con.query('UPDATE user_workout SET comments = \''+ req.params['comments'] + '\' WHERE workout_id = '+ req.params['workout_id'] + ';' , function (error, results, fields) {
			if (error)
				throw error;
		res.send(results);
		});
	}
	catch(err){
		console.log(err);
	}
});

// Modify workout's public/private visibility
app.put('/exercises/:workout_id/visibility/:visibility', (req, res) => {

	console.log("Incoming request to update workout_id's visibility...");

	try{
		con.query('UPDATE workout_info SET visibility = '+ req.params['visibility'] +' WHERE workout_id = '+ req.params['workout_id'] + ';' , function (error, results, fields) {
			if (error)
				throw error;
		res.send(results);
		});
	}
	catch(err){
		console.log(err);
	}
});

//return workout by workout_id
app.get('/workout/:workout_id', (req,res) => {

	console.log("Incoming request for workout...");

	try{
		var workout_id = parseInt(req.params['workout_id']);
		con.query('SELECT DISTINCT * from workout_info NATURAL JOIN user_workout NATURAL JOIN exercise WHERE workout_id = ' + workout_id + ' ;', function(error,results,fields) {
			if(error)
				throw error;
				res.send(results);
		});
	}
	catch(err){
		console.log(err);
	}
});


// Returns a list of exercises from a workout with the category, ExpLevel, intensity, image, and length parameters
app.get('/focus/:focus/expertise/:expertise/intensity/:intensity', (req, res) => {

	console.log("Incoming request for exercises with custom features...");

	try{
		con.query('SELECT exercise_name, rep_count, set_count, exercise_image, default_length FROM exercise NATURAL JOIN workout_info NATURAL JOIN user_workout WHERE category = \'' + req.params['focus'] + '\' AND ExpLevel = \'' + req.params['expertise'] + '\' AND intensity=' + req.params['intensity'] + ';', function (error, results, fields) {
			if (error)
				throw error;
			res.send(results);
		});
	}
	catch(err){
		console.log(err);
	}
});


//Return Workout ID for newly created Workout
app.post('/newWorkoutId/:workoutObject' , (req, res) => {

	console.log("Incoming request to create workout...");

	var obj = JSON.parse(req.params['workoutObject']);
	//Insert new workout object into user_workout
	try {
 		con.query('INSERT INTO user_workout (user_id, workout_length, workout_desc, workout_name,intensity, ExpLevel, Time_stamp) VALUES (' +  obj['userID'] + ',' + obj['workoutDuration'] + ', \'' + obj['workoutDesc'] + '\' , \'' + obj['workoutName'] + '\',' + obj['intensity'] + ', \'' + obj['experience'] + '\', CURRENT_TIMESTAMP);', function (error, results, fields) {
    	if(error)
    		throw error;
  		});
	}
	catch(err){
		console.log(error);
	}

	//select workoutID that was created in the last step return it
	try{
		con.query('SELECT max(workout_id) as workoutID from user_workout;', function(error,results,fields){
			var max = results[0].workoutID;
			res.send({workoutID: max});
		});
	}
	catch(err){
		console.log(err);
	}


});

// Checks to see if a username is taken
app.get('/home/username/:username', (req,res) => {

	console.log('Incoming username validation...');

	try{
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
	}
	catch(err){
		console.log(err);
	}
});

//Post Exercise to Workout
app.post('/workoutID/:workoutID/exerciseObject/:exerciseObject', (req, res) => {

	console.log("Incoming request to create exercise...");

	var obj = JSON.parse(req.params['exerciseObject']);
	var maxExerciseID = 0;
	//Insert new exercise object into exercise
	try {
		con.query('INSERT INTO exercise (exercise_name, exercise_desc, default_length, exercise_image) VALUES (\'' + obj['name'] + '\', \'' + obj['desc'] + '\', \'' + obj['length'] + '\', \'' + obj['imageurl'] + '\');', function(error, results, fields) {
			if(error)
				throw error;
			});
	}
	catch(err){
		console.log(error);
	}

	//Get newly created exerciseID
	try{
		con.query('SELECT MAX(exercise_id) as exerciseID from exercise;', function(error,results,fields){
			maxExerciseID = results[0].exerciseID;
			
		});
	}
	catch(err){
		console.log(error);
	}
	console.log(maxExerciseID);
	//Insert exercise to workoutInfo
	try{
		con.query('INSERT INTO workout_info (workout_id INT, exercise_id, set_count, rep_count) VALUES (\'' + req.params['workoutID'] + '\', \'' + maxExerciseID + '\', \'' + obj['sets'] + '\, \'' + obj['reps'] + '\');', function(error, results, fields) {
			if(error)
				throw error;
			});
	}
	catch(err){
		console.log(error);
	}
});

app.patch('/exercises/:workout_id/rating/:rating', (req, res) => {

	console.log("Incoming request to update workout_id's rating...");

	try{
		con.query('UPDATE user_workout SET rating = '+ req.params['rating'] +' WHERE workout_id = '+ req.params['workout_id'] + ';' , function (error, results, fields) {
			if (error)
				throw error;
		res.send(results);
		});
	}
	catch(err){
		console.log(err);
	}
	});

	app.patch('/exercises/:workout_id/comments/:comments', (req, res) => {

		console.log("Incoming request to update workout_id's comments...");

		try{
			con.query('UPDATE user_workout SET comments = '+ req.params['comments'] +' WHERE workout_id = '+ req.params['workout_id'] + ';' , function (error, results, fields) {
				if (error)
					throw error;
				res.send(results);
				});
		}
		catch(err){
			console.log(err);
		}
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
