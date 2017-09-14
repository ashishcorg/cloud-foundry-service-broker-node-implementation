/**
 * External Module dependencies.
 */

var express = require('express'),
http = require('http'),
path = require('path'),
bodyParser = require("body-parser"),
validate = require("express-validation");

/**
 * Internal module dependencies.
 */
var serviceBrokerRoute = require('./routes/route');

/**
 * Application configuration
 */
var app = express();
app.use(bodyParser.urlencoded({
	extended : true
}));
app.use(bodyParser.json());

/**
 * Route registration
 */
app.use("/v2", serviceBrokerRoute);

/**
 * error handler
 */
app.use(function(err, req, res, next) {
	if (err instanceof validate.ValidationError)
		return res.status(err.status).json(err);
	return res.status(500);
});

/**
 * start server
 */
http.createServer(app).listen(process.env.PORT || 3000, function() {
	console.log('Express server listening on port ' + process.env.PORT || 3000);
});
