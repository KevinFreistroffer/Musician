'use strict';

var express      = require('express');
var mongoose     = require('mongoose');
var path         = require('path');
var favicon      = require('serve-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');

// config
var config = require('./config');

// Database Login
var db = mongoose.connection;

mongoose.connect('mongodb://YOUR_USERNAME:YOUR_PASSWORD@ds049161.mongolab.com:49161/artist');

// connection object. connection.on, connection.once
// db.on('error', function() {
//     console.log('error connecting to db.');
// });
// db.once('open', function() {
//     console.log('Connected to DB.');
// });

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '../client')));
// app.use(express.static(path.join(__dirname, '../client/app')));
app.use(express.static(path.join(__dirname, './dist')));


app.set('port', config.port);

var router = require('./router')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.send(err);
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send(err);
});

app.listen(app.get('port') || 3000, function() {
    console.log('listening ' + app.get('port') + '...');
});


module.exports = app;
