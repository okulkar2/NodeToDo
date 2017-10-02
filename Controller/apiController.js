
var Todo = require('../Model/Todo.model');
var bodyParser = require('body-parser');

module.exports = function(app){

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true}));

	app.get('/api/todos/:uname', function(req, res){

		console.log("Retrieving a Todo with username");

		Todo.find({ username: req.params.uname }).exec(function(err, todoList){

			if (err){
				res.send(`There is no ${req.params.uname} present in the  database`);
			}else{
				res.send(JSON.stringify(todoList));
			}
		});

	});

	app.get('/api/todo/:id', function(req, res){

		console.log("Retrieving a single Todo");

		Todo.findById({ _id: req.params.id }).exec(function(err, todoList){

			if (err){
				res.send(`There is no ${req.params.id} present in the  database`);
			}else{
				res.json(todoList);
			}
		});

	});

	app.post('/api/todo', function(req, res){

	});

	app.delete('/api/todo', function(req, res){

	});

}