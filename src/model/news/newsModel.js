const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
	title: {
		type: String,
      required: true,
	},
	body: {
		type: String,
		required: true
  },
  author: {
		type: String,
		required: true
	}    
}, { collection: 'news'});

module.exports = mongoose.model('newsData', newsSchema);