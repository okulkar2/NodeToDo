var express = require('express');
var mongoose = require('mongoose');
var Todo = require('./Model/Todo.model');
var config = require('./config');
var setupController = require('./Controller/setupController');
var apiController = require('./Controller/apiController');

var app = express();
var port = process.env.PORT || 300;

app.use('/assets', express.static(__dirname+'/public'));
app.set('view engine', 'ejs');

mongoose.Promise = global.Promise;
mongoose.connect(config.getDatabaseURI());
setupController(app);
apiController(app);

app.get('/', function(req, res){
	res.send("Welcome to NodeToDo");
});

app.listen(port, function(){
	console.log("Listening on port: " + port);
});