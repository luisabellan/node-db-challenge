"use strict";

var express = require('express');

var Projects = require('./resources-model');

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
router.get('/:id/moreinfo', function (req, res) {
  var id = req.params.id;
  Projects.findMoreInfoById(id).then(function (project) {
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
router.post('/:id/project', function (req, res) {
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