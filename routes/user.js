const express = require('express');
const router = express.Router();

const { getUser, postUser } = require('../controllers/user');


router
    .route('/register')
    .get(getUser)
    .post(postUser);

module.exports = router;