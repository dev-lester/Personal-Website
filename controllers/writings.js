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
    const getWritingById = await Writing.findById(req.params.id);
    res.status(200).json({
        success: true,
        data: getWritingById
    });
}

// @desc create new writing
// @route POST /api/writings
// @access Private
// exports.createWriting = async (req, res, next) => {
//     res.render('create');
// }
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
            res.redirect('/writings');
        }
    });
}


// @desc update writing
// @route PUT /api/writings/:id
// @access Private
exports.updateWriting = async (req, res, next) => {
    const updateWritingbyId = await Writing.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({
        success: true,
        data: updateWritingbyId
    });
}

// @desc delete single writing
// @route DELETE /api/writings/:id
// @access Private
exports.deleteWriting = async (req, res, next) => {
    const deleteWritingById = await Writing.findByIdAndDelete(req.params.id);
    res.status(200).json({
        success: true,
        data: {}
    });
}