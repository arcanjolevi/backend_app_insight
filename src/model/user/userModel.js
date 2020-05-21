const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		unique: true,
		lowercase: true,
		required: true
	},
	institution: {
		type: String,
		required: true
	},
	whatsapp: {
		type: String,
		required: true
	},
	bornDate:{
		type:String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	plans: {
		type: [String],
		default: []
	},
	prays: {
		type: [String],
		default: []
	},
	team: {
		type: String,
		default: ""
	},
	course: {
		type: String,
		default: ""
	},
	admin: {
		type: Boolean,
		default: false
	},
	createAt: {
		type: Date,
		default: Date.now
	}

}, { collection: 'users'});



module.exports = mongoose.model('UserData', userSchema);