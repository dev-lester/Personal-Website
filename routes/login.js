const express = require('express');
const router = express.Router();

const { getlogin, getlogout, postLogin } = require('../controllers/login');


router
    .route('/login')
    .get(getlogin)
    .post(postLogin);

router
    .route('/logout')
    .get(getlogout);

module.exports = router;