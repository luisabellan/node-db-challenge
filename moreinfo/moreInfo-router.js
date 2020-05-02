const express = require('express');

const MoreInfo = require('./moreInfo-model.js');

const router = express.Router();


router.get('/:id/moreinfo', (req, res) => {
  const { id } = req.params;

  MoreInfo.findMoreInfoById(id)
  .then(project => {
    if (project.length) {
     // console.log(project)
      
      res.json(project);
    } else {
      res.status(404).json({ message: 'Could not find project for given project' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get project' });
  });
});


module.exports = router;


