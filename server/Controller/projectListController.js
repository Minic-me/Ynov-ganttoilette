'use strict';

const express = require('express');
const router = express.Router();

console.log("OK");

// Variables
var liste = [];
var archive = [];

// Add a project
router.post('/createProject', (req, res) => {
    console.log(req.query);
    console.log('Adding project...');

    let oneProject = req.body.project;

    liste.push(oneProject);
    archive.push({
        action: 'add',
        status: 'success',
        ip: req.headers['x-forwarded-for'],
        date: Date()
    });

    console.log("\nAdding a project" + archive[archive.length - 1]);

    res.end();
});


// Delete a project
router.delete('/deleteProject/:id', (req, res, next) => {
    liste.splice(req.params.id, 1);
    res.end();

});

router.get('/getProjects', (req, res) => {
    res.status(200);
    res.json(liste);
    console.log("test server getprojects");
});

exports.router = router;
