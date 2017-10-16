var express = require('express');
var path = require('path');
var calculate=require('./calculate.js');
var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get('/', function(request,response){

  console.log(request.query.n1);
  console.log(request.query.n2);
  console.log(request.query.op);
 var result=calculate(request.query.op,Number(request.query.n1),Number(request.query.n2));
	console.log(result + "");
	response.render('index', { result: result });
});


app.listen(3000)
