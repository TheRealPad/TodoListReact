const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = new Schema({
	title: {
		type: String
	},
	description: {
		type: String
	},
	finish: {
		type: Boolean
	},
	}, {
		collection: 'todos'
})

module.exports = mongoose.model('Todo', todoSchema)
