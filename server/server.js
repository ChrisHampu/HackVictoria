var path = require('path');
var fs = require('fs');
var express = require('express');
var babelify = require('express-babelify-middleware');
var bodyParser = require('body-parser');

// Twilio Credentials 
var accountSid = 'AC5a1c72af62378c775435f87a14d43e03'; 
var authToken = 'cec567c404a6def596106316d68994d0'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 

// Server part
var app = express();
app.use('/app.js', babelify(path.join(__dirname, '../frontend/app.jsx'), null, { plugins: ["transform-react-jsx"]}));
app.use('/', express.static(path.join(__dirname, '../dist')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/phonedata', function (req, res) {

	var phone = req.body.phone.replace('-', '').replace('-', '');
	
	console.log("sent sms");
	
	client.sendMessage({
	
	    to: "+1" + phone, // Any number Twilio can deliver to
	    from: '+17784022016', // A number you bought from Twilio and can use for outbound communication
	    body: req.body.payload // body of the SMS message
	
	}, function(err, responseData) { //this function is executed when a response is received from Twilio
	
	    if (!err) { // "err" is an error received during the request, if any
	
	        // "responseData" is a JavaScript object containing data received from Twilio.
	        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
	        // http://www.twilio.com/docs/api/rest/sending-sms#example-1
	
	        console.log(responseData.from); // outputs "+14506667788"
	        console.log(responseData.body); // outputs "word to your mother."
	
	    }
	    else
	    {
	    	console.log(err);
	    }
	});
});


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