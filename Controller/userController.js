'use strict';



const express = require('express');
const router = express.Router();
const userModel = require('../Model/userModel');

console.log("OK");

/**
 * 
 * 
 * 
 **/

router.get('/signup', (req, res) => {

    console.log(req.query);
    console.log("Add function called..");
});

router.get('/login', (req, res) => {

    console.log(req.query);
    console.log("Add function called..");
});


router.get("/:name", (req, res) => {
    userModel.findOne({
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
