var mongoose = require('mongoose');

var todosSchema = mongoose.Schema({
	name: {
		type:'String',
		required: true,
	},
	createdOn:{
		type: 'Number',
		required: true
	},
	done: {
		type: 'Boolean',
		required: true
	}
});

module.exports = mongoose.model('todos', todosSchema);