"use strict";

var express = require('express');

var ProjectRouter = require('./projects/project-router.js');

var MoreInfoRouter = require('./moreinfo/moreInfo-router.js');

var server = express();
server.use(express.json());
server.use('/api/projects', ProjectRouter);
server.use('/api/projects', MoreInfoRouter);
module.exports = server;