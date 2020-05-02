"use strict";

var express = require('express');

var Projects = require('./project-model');

var router = express.Router();
router.get('/', function (req, res) {
  Projects.find().then(function (projects) {
    res.json(projects);
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to get projects'
    });
  });
});
router.get('/:id', function (req, res) {
  var id = req.params.id;
  Projects.findById(id).then(function (project) {
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({
        message: 'Could not find project with given id.'
      });
    }
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to get projects'
    });
  });
});
router.get('/:id/steps', function (req, res) {
  var id = req.params.id;
  Projects.findSteps(id).then(function (steps) {
    if (steps.length) {
      // console.log(steps)
      res.json(steps);
    } else {
      res.status(404).json({
        message: 'Could not find steps for given project'
      });
    }
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to get steps'
    });
  });
});
router.post('/', function (req, res) {
  var projectData = req.body;
  Projects.add(projectData).then(function (project) {
    res.status(201).json(project);
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to create new project'
    });
  });
});
router.post('/:id/steps', function (req, res) {
  var stepData = req.body;
  var id = req.params.id;
  Projects.findById(id).then(function (project) {
    if (project) {
      Projects.addStep(stepData, id).then(function (step) {
        res.status(201).json(step);
      });
    } else {
      res.status(404).json({
        message: 'Could not find project with given id.'
      });
    }
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to create new step'
    });
  });
});
router.put('/:id', function (req, res) {
  var id = req.params.id;
  var changes = req.body;
  Projects.findById(id).then(function (project) {
    if (project) {
      Projects.update(changes, id).then(function (updatedScheme) {
        res.json(updatedScheme);
      });
    } else {
      res.status(404).json({
        message: 'Could not find project with given id'
      });
    }
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to update project'
    });
  });
});
router["delete"]('/:id', function (req, res) {
  var id = req.params.id;
  Projects.remove(id).then(function (deleted) {
    if (deleted) {
      res.json({
        removed: deleted
      });
    } else {
      res.status(404).json({
        message: 'Could not find project with given id'
      });
    }
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to delete project'
    });
  });
});
module.exports = router;