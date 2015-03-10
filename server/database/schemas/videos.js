'use strict';

var mongoose = require('mongoose');

var videoSchema = new mongoose.Schema({
	id:    String,
	title: String,
	album: String,
	url:   String,
	embed: String
});

var Video = mongoose.model('Video', videoSchema);

module.exports = Video;