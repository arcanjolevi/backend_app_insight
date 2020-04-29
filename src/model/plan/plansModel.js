const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var planSchema = new Schema({
	name: {
		type: String,
		lowercase: true,
		unique: true
	},
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,		
		required: true
	},
	totalSteps: {
		type: Number,
		required: true
    },
    plan: {
        type: [{
            step: String,
            text: String
        }],
        required: true
    },
	createAt: {
		type: Date,
		default: Date.now
	}

}, { collection: 'plans'});



module.exports = mongoose.model('PlanData', planSchema);