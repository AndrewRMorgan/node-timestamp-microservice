'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./app/routes/index.js');
var api = require('./app/api/timestamp.js');

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log('The server is listening on port ' + port);
})
