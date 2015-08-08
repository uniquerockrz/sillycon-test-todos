module.exports = function(app){

	app.get('/web/todos', function(req, res){
		Todos.find().exec(function(err, todos){
			if(err){
				console.log(err);
				res.status(400);
				res.set('Content-Type', 'application/json');
				res.end(JSON.stringify({
					'success':false
				}));
			}
			else{
				res.status(200);
				res.set('Content-Type', 'application/json');
				res.send(JSON.stringify({
					'success': true,
					'todos': todos
				}));	
			}
		});
	});

	app.post('/web/todos', function(req, res){
		console.log(req.body);
		
		var todo = new Todos();
		todo.name = req.body.name;
		todo.createdOn = Date.now();
		todo.done = false;

		todo.save(function(err, t){
			if(err){
				console.log(err);
				res.status(400);
				res.set('Content-Type', 'application/json');
				res.end(JSON.stringify({
					'success':false
				}));
			}
			else{
				res.status(200);
				res.set('Content-Type', 'application/json');
				res.send(JSON.stringify({
					'success': true
				}));	
			}
		});

	});

}