const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

const User = require('../models/User');
const config = require('../config');

/*
 * Local Strategy: Authenticate email & password
 * using local data.
 */
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
    User.findOne({ email: email }, (err, user) => {
        if (err) return done(err);
        if (!user) return done(null, false);

        user.comparePassword(password, function(err, isMatch) {
            if (err) return done(err);
            if (!isMatch) return done(null, false);

            return done(null, user);
        });
    });
});

/*
 * JWT Strategy: Authenticate JSON Web Token
 */
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    User.findById(payload.sub, (err, user) => {
        if (err) return done(err, false);

        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
});

passport.use(jwtLogin);
passport.use(localLogin);
