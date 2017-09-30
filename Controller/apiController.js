
var todo = require('../Model/Todo.model');
var bodyParser = require('body-parser');

module.exports = function(app){

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true}));

	app.get('/api/todo/:uname', function(req, res){

		Todo.find()

	});



}