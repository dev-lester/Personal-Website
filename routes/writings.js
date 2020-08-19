const express = require('express');
const {
    getWritings,
    getWriting,
    createWriting,
    updateWriting,
    deleteWriting
} = require('../controllers/writings');

const router = express.Router();

router
    .route('/')
    .get(getWritings)
    .post(createWriting);

router
    .route('/:id')
    .get(getWriting)
    .put(updateWriting)
    .delete(deleteWriting);



module.exports = router;