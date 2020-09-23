const { use, Strategy } = require('passport');
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
const bycript = require('bcryptjs')


module.exports = function(passport) {
  // local strategy
  passport.use(new LocalStrategy(function(username, password, done) {
    // Match username
    let query = {username: username}
    User.findOne(query, function(err, user) {
        if (err) throw err;
        if (!user) {
            return done(null, false, { message: 'no user found!'});
        }
        // Match password
        bycript.compare(password, user.password, function(err, isMatch) {
            if (err) throw err;
            if (isMatch) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'wrong password!'});
            }
        });
    });
}));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

}