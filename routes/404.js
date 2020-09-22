const express = require('express');
const router = express.Router();

const { errorPage } = require('../controllers/error-page');


router
    .route('*')
    .get(errorPage);

module.exports = router;