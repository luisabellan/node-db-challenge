"use strict";

var knex = require('knex');

var config = require('../knexfile.js'); // we must select the development object from our knexfile


var db = knex(config.development); // export for use in codebase

module.exports = db;