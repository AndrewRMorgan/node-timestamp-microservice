'use strict';

var express = require('express');
var app = express();
var moment = require("moment");

app.use("/", express.static(__dirname + "/public"))

app.get("/:query", function(req, res) {
  var date = req.params.query;
  var unix = null;
  var natural = null;

  if (+date >= 0) {
    unix = +date;
    natural = convertToNatural(unix);
  }

  if (isNaN(+date) && moment(date).isValid()) {
    unix = +convertToUnix(date)
    natural = moment(date).format("MMMM D, YYYY");
  }

  res.json({"unix": unix, "natural": natural});
});

function convertToNatural(unix) {
  return moment.unix(unix).format("MMMM D, YYYY");
}

function convertToUnix(natural) {
  return moment(natural).format("X");
}

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log('The server is listening on port ' + port);
});
