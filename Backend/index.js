const express = require('express');
const app = express();
const port = 3000;
const  mysql = require('mysql');

app.get('/', (req, res) => {
 res.send('Hello World');
 console.log('Incoming request');
});

app.get('/user',(reg,res)=> {
  res.send('<h1>Hello User</h1>');
  console.log('Incoming request');
});


app.get('/tables',(req,res) => {
    con.query("show tables;",function(err,result,fields) {
	    if(err) throw err;
    	res.send(result);});	    

    console.log('Incoming request');
});

app.listen(port, () => {
 console.log('Simple Example');
});

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "dev",
  password: "anyfit0987",
  database: "anyfit"
});
con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

//con.query("show tables;", function(err,result,fields){
//if(err) throw err;
//console.log(result);
//});




//con.end(function(err) {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
  //if(err) console.log('err: ', err);
  //else console.log('Terminated done: ');
//});

