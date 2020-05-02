"use strict";

var express = require('express');

var MoreInfo = require('./moreInfo-model');

var router = express.Router();
router.get('/:id/moreinfo', function (req, res) {
  var id = req.params.id;
  MoreInfo.findMoreInfoById(id).then(function (project) {
    if (project.length) {
      // console.log(project)
      res.json(project);
    } else {
      res.status(404).json({
        message: 'Could not find project for given project'
      });
    }
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to get project'
    });
  });
});
module.exports = router;