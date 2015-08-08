
module.exports = function(app) {

	/* test request, to check if server is running */

	app.get('/', function(req, res) {
		res.status(200);
		res.set('Content-Type', 'application/json');
		res.end('Hello world !');
	});

	/* For CORS */

	app.all('*', function(req, res, next) {
  		res.header("Access-Control-Allow-Origin", app.get('frontendUrl'));
  		res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  		res.header("Access-Control-Allow-Headers", "X-Requested-With");
  		res.header("Access-Control-Allow-Headers", "Content-Type");
  		res.header("Access-Control-Allow-Credentials", "true");
  		next();
 	});

}





