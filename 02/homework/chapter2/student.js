var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	courses: [{
		type: String,
		ref: 'Course'
	}]
});

/* Returns the student's first name, which we will define
 * to be everything up to the first space in the student's name.
 * For instance, "William Bruce Bailey" -> "William" */
schema.virtual('firstName').get(function() {
	var nameSplited = this.name.split(' ');
	var firstName = nameSplited[0] || '';
	return firstName;
});

/* Returns the student's last name, which we will define
 * to be everything after the last space in the student's name.
 * For instance, "William Bruce Bailey" -> "Bailey" */
schema.virtual('lastName').get(function() {
	var nameSplited = this.name.split(' ');
	var lastIndex = nameSplited.length - 1;
	var lastName = nameSplited[lastIndex] || '';
	return lastName;
});

module.exports = schema;