const express = require('express');
const router = express.Router();

const { contact } = require('../controllers/contact');



router
    .route('/')
    .get(contact);


module.exports = router;