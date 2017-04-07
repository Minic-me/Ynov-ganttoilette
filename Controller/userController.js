'use strict';

const express = require('express');
const router = express.Router();
const userSchema = require('../Model/userSchema');

router.get('/register', (req, res) => {

    let validateEmail = (email) => {
        let reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        return reg.test(email);
    }

    console.log(!req.query.name, typeof req.query.name !== "string", !req.query.firstname, typeof req.query.firstname !== "string", !validateEmail(req.query.email), !req.query.password, typeof req.query.password !== "string");

    // vérifier les données
    if (!req.query.name || typeof req.query.name !== "string" ||
        !req.query.firstname || typeof req.query.firstname !== "string" ||
        !validateEmail(req.query.email) ||
        !req.query.password || typeof req.query.password !== "string") {

        console.log('error');
        res.status(400);
        res.end();
        return;
    }

    let data = {
        name: req.query.name,
        firstname: req.query.firstname,
        email: req.query.email,
        password: req.query.password,
        projectOwned: ['azertyijhgfd'],
        projectShared: ['qWdsgfhykujp']
    }
    console.log(data);

    userSchema.create(data, (err, user) => {
        console.log('caca');
        if (err) {
            console.log(err);
            res.status(500);
            res.end();
        }
        else {
            console.log(user);
            res.json();
        }
    });
});

router.get('/login', (req, res) => {

    console.log(req.query, "Login function called..");
});

router.get("/:name", (req, res) => {
    userSchema.findOne({
        name: req.params.name
    }, (err, docs) => {
        if (err) {
            console.log(err);
            res.status(500);
            res.end;
        }
        else {
            res.json(docs);
        }
    });
});

exports.router = router;
