'use strict';

var mongoose = require('mongoose');

var albumSchema = new mongoose.Schema({
	title: String,
	year: Number,
	link: String,
	desc: String
});

var Album = mongoose.model('Album', albumSchema);

module.exports = Album;