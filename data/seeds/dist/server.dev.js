"use strict";

var express = require('express');

var ProjectRouter = require('./projects/project-router.js');

var server = express();
server.use(express.json());
server.use('/api/projects', ProjectRouter);
module.exports = server;