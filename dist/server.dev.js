"use strict";

var express = require('express');

var ProjectRouter = require('./projects/project-router.js');

var ResourceRouter = require('./resources/resource-router.js');

var TaskRouter = require('./tasks/task-router.js');

var server = express();
server.use(express.json());
server.use('/api/projects', ProjectRouter);
server.use('/api/resources', ResourceRouter);
server.use('/api/tasks', TaskRouter);
module.exports = server;