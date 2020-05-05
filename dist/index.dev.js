"use strict";

var server = require('./server.js');

var PORT = process.env.PORT || 5000;
server.listen(PORT, function () {
  console.log("Listening on port ".concat(PORT, "..."));
});