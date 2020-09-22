const Writing = require('../models/Writings'); // Import models


// @desc get all writings
// @route GET /api/writings
// @access Public
exports.getWritings = async (req, res, next) => {
    await Writing.find({}, (err, writings) => {
        if (err) {
            console.log(err);
        } else {
            res.render('writing', {
                title: req.body.title,
                description: req.body.description,
                content: req.body.content,
                writings: writings
            });
        }
    }).sort({
        createdAt: 'desc'
    });
}


// @desc get single writing
// @route GET /api/writings/:id
// @access Public
exports.getWriting = async (req, res, next) => {
    await Writing.findById(req.params.id, (err, writing) => {
        if (writing == null) {
            res.redirect('/writings');
        } else {
            res.render('single-writing', {
                writing: writing
            });
        }
    });
}


// @desc create new writing
// @route POST /api/writings
// @access Private
exports.renderCreateWriting = async (req, res, next) => {
    res.render('create');
}

exports.createWriting = async (req, res, next) => {
    let createWriting = new Writing({
        title: req.body.title,
        description: req.body.description,
        content: req.body.content
    });
    await createWriting.save((err) => {
        if (err) {
            console.log(err);
        } else {
            req.flash('success', 'Added new blog!');
            res.redirect('/writings');
        }
    });
}


// @desc update writing
// @route PUT /api/writings/:id
// @access Private
exports.getUpdatetWriting = async (req, res, next) => {
    await Writing.findById(req.params.id, (err, writing) => {
        if (err) {
            console.log(err);
        } else {
            res.render('edit', {
                writing: writing
            });
        }
    });
}

exports.updateWriting = async (req, res, next) => {
    const updateWriting = {
        title: req.body.title,
        description: req.body.description,
        content: req.body.content
    }
    await Writing.findByIdAndUpdate(req.params.id, updateWriting, (err) => {
        if (err) {
            res.redirect('edit' + req.params.id);
        } else {
            req.flash('success', 'Blog updated!');
            res.redirect('/writings/' + req.params.id);
        }
    });
}


// @desc delete single writing
// @route DELETE /api/writings/:id
// @access Private
exports.deleteWriting = async (req, res, next) => {
    await Writing.findByIdAndDelete(req.params.id);
    req.flash('danger', ` id: ${req.params.id} Deleted`);
    res.redirect('/writings');
}