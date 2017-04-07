'use strict';

const express = require('express');
const router = express.Router();
const userSchema = require('../Model/userSchema');





let isUserConnected = (req) => {
    let connected = false;
    if (typeof req.session.user !== "undefined") {
        userSchema.findById(req.session.user, (err, user) => {
            if (!err) {
                req.session.user = user._doc;
                connected = true;
            }
        })
    }
    return connected;
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
            res.status(500);
            res.end();
        }
        else {
            res.json(user._doc);
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
        res.sent = true;
    });
    // use req.session pour ajouter les donnés de l'utilisateur
});

router.get("/:name", (req, res) => {
    userSchema.findOne({
        name: req.params.name
    }, (err, docs) => {
        if (err) {
            console.log(err);
            res.status(500);
            res.end();
        }
        else {
            res.json(docs);
        }
        res.sent = true;
    });
});

exports.router = router;
