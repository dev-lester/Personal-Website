const User = require('../models/User');


exports.getUser = async (req, res, next) => {
    res.render('register');
}

exports.postUser = async (req, res, next) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }
    console.log(user);
}