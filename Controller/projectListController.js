'use strict';

/**
 * Create an array of all the right files in the source dir
 * @param      {String}   source path
 * @param      {Object}   options
 * @param      {Function} callback 
 * @jsFiddle   A jsFiddle embed URL
 * @return     {Array} an array of string path
 */

const express = require('express');
const router = express.Router();

const projectModel = require('../Model/projectSchema');

/**
 * Add a project
 * 
 */
router.post('/createProject', (req, res, next) => {
    console.log(req.query, 'Adding project...');
    let oneProject = req.body.project;
    res.end();
});

/**
 * Delete a project
 */
router.delete('/deleteProject/:id', (req, res, next) => {
    res.end();
});

/**
 * Get a project
 */
router.get('/getProjects', (req, res, next) => {
    res.status(200);
});

exports.router = router;

/**
 * Delete a project
 * @param {String} id - id of the project to delete
 */
let deleteProject = (req, res) => {
    let id = req.params.id;
    projectModel.findByIdAndRemove(id, (err) => {
        if (err) {
            res.status(400);
            console.log(err);
            res.end();
        }
        else {
            res.status(204);
            res.end();
        }
    });

};
