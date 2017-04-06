'use strict';

const express = require('express');
const router = express.Router();
const heroModel = require('../model/UserModel');

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
