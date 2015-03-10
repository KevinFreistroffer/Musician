'use strict';

var express = require('express');
var mongoose = require('mongoose');
var router  = express.Router();

var Video = require('../../database/schemas/videos');

router.get('/', function(req, res) {
	console.log('server reached. /video/');
	Video.find({}, function(error, videos) {
		console.log('inside Video.find');

		// enough to verify it has data in the array?
		if (videos && videos.length > 0) {
			res.send(videos);
		} else {
			res.send('Error: ' + error);
		}
	});
});

module.exports = router;