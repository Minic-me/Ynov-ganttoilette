'use strict';

const express = require('express');
const router = express.Router();
const userSchema = require('../Model/userSchema');





let isUserConnected = (req, callback) => {
    callback = typeof callback === "function" ? callback : () => {};
    if (typeof req.session.user !== "undefined") {
        userSchema.findById(req.session.user._id, (err, user) => {
            if (!err) {
                req.session.user = user._doc;
                callback(true);
            }
            else {
                callback(false);
            }
        })
    }
    else {
        callback(false);
    }
}
exports.isUserConnected = isUserConnected;

router.get('/register', (req, res) => {

    let data = {
        name: req.query.name,
        firstname: req.query.firstname,
        email: req.query.email,
        password: req.query.password,
        projectOwned: [],
        projectShared: []
    };

    userSchema.create(data, (err, user) => {
        if (err) {
            console.log(err);
            res.sendStatus(500).end();
        }
        else {
            res.sendStatus(204).end();
        }
    });
});

router.get('/login', (req, res) => {

    console.log(req.query, "Login function called..");
    userSchema.findOne({
        email: req.query.email,
        password: req.query.password
    }, (err, user) => {
        if (err) {
            console.log(err);
            res.sendStatus(500).end();
        }
        else {
            req.session.user = user;
            res.sendStatus(204).end();
        }
    });
});

exports.router = router;
