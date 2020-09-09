const express = require('express');
const router = express.Router();
const {
    getWritings,
    getWriting,
    createWriting,
    updateWriting,
    deleteWriting,
    renderCreateWriting,
    getUpdatetWriting
} = require('../controllers/writings');


router
    .route('/')
    .get(getWritings)
    .post(createWriting);    

router
    .route('/create')
    .get(renderCreateWriting)
    .post(createWriting);    

router
    .route('/:id')
    .get(getWriting)
    .put(updateWriting)
    .delete(deleteWriting);

router
    .route('/edit/:id')
    .get(getUpdatetWriting)
    .put(updateWriting);

module.exports = router;