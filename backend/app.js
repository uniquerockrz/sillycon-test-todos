/* Bootstrap file, all other files are loaded from here, app starts from this file */

/* All the node module dependencies */
var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

/* Include the configurations */

require('./config/environment.js')(app, express, bodyparser);
require('./config/credentials.js')(app, mongoose);

/* Include the models */

Todos = require('./models/Todos.js');

/* Include the routes */

// main route
require('./routes/index.js')(app);

// webapp routes
require('./routes/todos/todos.js')(app);

app.listen(app.get('port'), function(){
	console.log("Express server listening on port %d in %s mode", app.get('port'), app.settings.env);
});