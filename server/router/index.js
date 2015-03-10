'use strict';

module.exports = function(app) {
	app.use('/album', require('./routes/album'));
	app.use('/videos', require('./routes/videos'));
};