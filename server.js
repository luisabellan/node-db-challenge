const express = require('express');

const ProjectRouter = require('./projects/project-router.js');
const MoreInfoRouter = require('./moreinfo/moreInfo-router.js');

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectRouter);
server.use('/api/projects', MoreInfoRouter);

module.exports = server;