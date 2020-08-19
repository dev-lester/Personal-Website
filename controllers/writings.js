// @desc get all writings
// @route GET /api/writings
// @access Public
exports.getWritings = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Get all writings`
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
exports.createWriting = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: `Create new writings`
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