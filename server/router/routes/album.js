'use strict';

var express = require('express');
var mongoose = require('mongoose');
var router  = express.Router();

var Album = require('../../database/schemas/album');

router.get('/:title', function(req, res) {
	console.log('server reached. /album/' + req.param('title'));
	Album.find({ slug: req.param('title')}, function(error, album) {
		console.log('inside Album.find');

		// enough to verify it has data in the array?
		if (album && album.length > 0) {
			res.send(album);
		} else {
			res.send('Error: ' + error);
		}
	});
});

module.exports = router;