"use strict";

var express = require('express');

var Tasks = require('./task-model');

var router = express.Router();
router.get('/', function (req, res) {
  Tasks.find().then(function (tasks) {
    res.json(tasks);
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to get tasks'
    });
  });
});
router.get('/:id', function (req, res) {
  var id = req.params.id;
  Tasks.findById(id).then(function (task) {
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({
        message: 'Could not find task with given id.'
      });
    }
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to get tasks'
    });
  });
});
router.post('/', function (req, res) {
  var taskData = req.body;
  Tasks.add(taskData).then(function (task) {
    res.status(201).json(task);
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to create new task'
    });
  });
});
router.put('/:id', function (req, res) {
  var id = req.params.id;
  var changes = req.body;
  Tasks.findById(id).then(function (task) {
    if (task) {
      Tasks.update(changes, id).then(function (updatedScheme) {
        res.json(updatedScheme);
      });
    } else {
      res.status(404).json({
        message: 'Could not find task with given id'
      });
    }
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to update task'
    });
  });
});
router["delete"]('/:id', function (req, res) {
  var id = req.params.id;
  Tasks.remove(id).then(function (deleted) {
    if (deleted) {
      res.json({
        removed: deleted
      });
    } else {
      res.status(404).json({
        message: 'Could not find task with given id'
      });
    }
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to delete task'
    });
  });
});
module.exports = router;