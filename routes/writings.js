const express = require('express');
const router = express.Router();
const {
    getWritings,
    getWriting,
    createWriting,
    updateWriting,
    deleteWriting,
    renderCreateWriting,
    getUpdatetWriting,
    ensureAuthenticated
} = require('../controllers/writings');

router
    .route('/')
    .get(getWritings)
    // .post(createWriting, ensureAuthenticated);    

router
    .route('/create')
    .get(ensureAuthenticated, renderCreateWriting)
    .post(ensureAuthenticated, createWriting);    

router
    .route('/:id')
    .get(getWriting)
    .put(ensureAuthenticated ,updateWriting)
    .delete(ensureAuthenticated, deleteWriting);

router
    .route('/edit/:id')
    .get(ensureAuthenticated, getUpdatetWriting)
    .put(ensureAuthenticated, updateWriting);

module.exports = router;


