const Writing = require('../models/Writings');// Import models




// @desc get all writings
// @route GET /api/writings
// @access Public
exports.getWritings = async (req, res, next) => {
    const writings = await Writing.find();
    res.status(200).json({
        success: true,
        data: writings
    });
}

// @desc get single writing
// @route GET /api/writings/:id
// @access Public
exports.getWriting = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Get single writing ${req.params.id}`
    });
}

// @desc create new writing
// @route POST /api/writings
// @access Private
exports.createWriting = async (req, res, next) => {
    const writing = await Writing.create(req.body);
    
    res.status(201).json({
        success: true,
        data: writing
    });
}

// @desc update writing
// @route PUT /api/writings/:id
// @access Private
exports.updateWriting = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Update single writings ${req.params.id}`
    });
}

// @desc delete single writing
// @route DELETE /api/writings/:id
// @access Private
exports.deleteWriting = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Delete single writings ${req.params.id}`
    });
}