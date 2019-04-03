jwt = require('jwt-simple');

const User = require('../models/User');
const config = require('../config');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp });
}

exports.signIn = function(req, res, next) {
    res.send({ token: tokenForUser(req.user) });
};

exports.signUp = function(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    // Return error if input is invalid
    if (!email || !password) {
        return res
            .status(422)
            .send({ error: 'You must provide email and password' });
    }

    User.findOne({ email: email }, (err, existingUser) => {
        if (err) return next(err);

        // Return error if email is already taken
        if (existingUser) {
            return res.status(422).send({ error: 'Email is in use' });
        }

        const user = new User({
            email: email,
            password: password
        });

        user.save(err => {
            if (err) return next(err);
            res.json({ token: tokenForUser(user) });
        });
    });
};

// Source: Most boilerplate authentication code adapted from
// Stephen Grider's Advanced React & Redux Udemy course.
