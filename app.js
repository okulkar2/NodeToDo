var express = require('express');
var mongoose = require('mongoose');
var Todo = require('./Model/Todo.model');
var config = require('./config')

var app = express();
var port = process.env.PORT || 300;

app.use('/assets', express.static(__dirname+'/public'));
app.set('view engine', 'ejs');

mongoose.connect(config.getDatabaseURI());

app.listen(port, function(){
	console.log("Listening on port: " + port);
});