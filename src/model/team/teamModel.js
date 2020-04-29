const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamSchema = new Schema({
	name: {
		type: String,
        required: true,
        unique: true
	},
	teamManagers: {
		type: [String],
		required: true
	},
	teamMembers: {
		type: [String],
		required: true
    },
    institution: {
		type: String,
		required: true
    },
    
}, { collection: 'teams'});



module.exports = mongoose.model('TeamData', teamSchema);