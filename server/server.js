var path = require('path');
var fs = require('fs');
var express = require('express');
var babelify = require('express-babelify-middleware');

// Server part
var app = express();
app.use('/app.js', babelify(path.join(__dirname, '../frontend/app.jsx'), null, { plugins: ["transform-react-jsx"]}));
app.use('/', express.static(path.join(__dirname, '../dist')));

var port = normalizePort(process.env.PORT || '4000');

var server = app.listen(port);


console.log("Listening on port" + port);

server.on('error', onError);

function onError(error) {
	if (error.syscall !== 'listen') {
		throw error;
	}

	var bind = typeof port === 'string'
		? 'Pipe ' + port
		: 'Port ' + port

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case 'EACCES':
			console.error(bind + ' requires elevated privileges');
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error(bind + ' is already in use');
			process.exit(1);
			break;
		default:
			throw error;
	}
}

function normalizePort(val) {
	var port = parseInt(val, 10);

	if (isNaN(port)) {
		// named pipe
		return val;
	}

	if (port >= 0) {
		// port number
		return port;
	}

	return false;
}