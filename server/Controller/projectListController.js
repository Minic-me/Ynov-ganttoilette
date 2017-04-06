'use strict';

const express = require('express');
const router = express.Router();

console.log("OK");

router.get('/createProject', (req, res) => {
    console.log(req.query);
    console.log('Adding project...');
});

exports.router = router;
