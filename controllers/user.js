const User = require('../models/User');
const bcrypt = require('bcryptjs');


exports.getUser = async (req, res, next) => {
    res.render('register');
}

exports.postUser = async (req, res, next) => {

    const name = req.body.name;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const password2 = req.body.password2;

    req.checkBody('name', 'name is required').notEmpty();
    req.checkBody('email', 'invalid email').notEmpty();
    req.checkBody('username', 'username is required').notEmpty();
    req.checkBody('password', 'password is required').notEmpty();
    req.checkBody('password2', 'password does not match').equals(req.body.password);

    let err = req.validationErrors();

    if (err) {
        res.render('register', {
            err: err
        });
    } else {
        let newUser = new User({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) {
                    console.log(err);
                }
                newUser.password = hash;
                newUser.save((err) => {
                    if (err) {
                        console.log(err);
                        return;
                    } else {
                        req.flash('success', 'You are now registered!');
                        res.redirect('login');
                    }
                });
            });
        });
    }
}