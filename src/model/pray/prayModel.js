const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var praySchema = new Schema({
	name: {
		type: String,
        required: true,
        lowercase: true,
        unique: true       
	},
	title: {
        type: String,
        require: true
    },
	description: {
		type: String,
		required: true
    },
    team:{
        type: String,
        required: true,
    },
	createAt: {
		type: Date,
		default: Date.now
	}
}, { collection: 'prays'});



module.exports = mongoose.model('PrayData', praySchema);
