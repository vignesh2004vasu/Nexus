const express = require('express');
const { createProject, assignCandidateToProject } = require('../controllers/projectController');

const router = express.Router();

router.post('/create', createProject);
router.post('/assign', assignCandidateToProject);

module.exports = router;
