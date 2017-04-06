'use strict';



const express = require('express');
const router = express.Router();


console.log("OK");

router.get('/signIn', function(req, res) {

    console.log(req.query);
    console.log("Add function called..");




});



exports.router = router;
