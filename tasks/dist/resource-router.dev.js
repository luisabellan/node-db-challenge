"use strict";

var express = require('express');

var Resources = require('./task-model');

var router = express.Router();
router.get('/', function (req, res) {
  Resources.find().then(function (resources) {
    res.json(resources);
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to get resources'
    });
  });
});
router.get('/:id', function (req, res) {
  var id = req.params.id;
  Resources.findById(id).then(function (resource) {
    if (resource) {
      res.json(resource);
    } else {
      res.status(404).json({
        message: 'Could not find resource with given id.'
      });
    }
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to get resources'
    });
  });
});
router.post('/', function (req, res) {
  var resourceData = req.body;
  Resources.add(resourceData).then(function (resource) {
    res.status(201).json(resource);
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to create new resource'
    });
  });
});
router.put('/:id', function (req, res) {
  var id = req.params.id;
  var changes = req.body;
  Resources.findById(id).then(function (resource) {
    if (resource) {
      Resources.update(changes, id).then(function (updatedScheme) {
        res.json(updatedScheme);
      });
    } else {
      res.status(404).json({
        message: 'Could not find resource with given id'
      });
    }
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to update resource'
    });
  });
});
router["delete"]('/:id', function (req, res) {
  var id = req.params.id;
  Resources.remove(id).then(function (deleted) {
    if (deleted) {
      res.json({
        removed: deleted
      });
    } else {
      res.status(404).json({
        message: 'Could not find resource with given id'
      });
    }
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to delete resource'
    });
  });
});
module.exports = router;