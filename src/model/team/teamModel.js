const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	teamMembers: {
		type: [String],
		deafult: []
  },
  institution: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	}
    
}, { collection: 'teams'});



module.exports = mongoose.model('TeamData', teamSchema);