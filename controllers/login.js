// login page

const passport = require('passport');

exports.getlogin = async (req, res, next) => {
    res.render('login');
}
// login process
exports.postLogin = async (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/user/login',
        failureFlash: true
    })(req, res, next);
}

// logout
exports.getlogout = async (req, res, next) => {
    req.logout();
    req.flash('success', 'You are now logout!');
    res.redirect('/user/login');
}