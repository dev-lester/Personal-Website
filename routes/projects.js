const express = require('express');
const router = express.Router();

const { projects } = require('../controllers/projects');



router
    .route('/')
    .get(projects);


module.exports = router;