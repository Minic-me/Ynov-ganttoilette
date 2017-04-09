'use strict';

const express = require('express');
const router = express.Router();
const projectSchema = require('../Model/projectSchema');


/**
 * Récupérer la liste des projets de l'utilisateur
 */
router.get('/getProjects', (req, res) => {
    projectSchema.find({}, (err, docs) => {
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

/**
 * Récupérer les détails d'un projet
 */
router.get('/:idProject', (req, res) => {
    // vérifier si l'utilisateur a le projet
    if (req.session.user.projectShared.indexOf(req.params.idProject) < 0) {
        res.json({});
        res.end;
    }
    else {
        projectSchema.findById(req.params.idProject, (err, docs) => {
            if (err) {
                console.log(err);
                res.status(500);
                res.end;
            }
            else {
                res.json(docs);
            }
        });
    }
});

/**
 * Add a project
 */
router.get('/createProject', (req, res, next) => {
    let data = {
        nameProject: req.query.nameProject,
        owner: req.session._,
        date: req.query.date,
        users: req.query.users
    };

    projectSchema.create(data, (err, project) => {
        if (err) {
            console.log(err);
            res.status(500);
            res.end();
        }
        else {
            // ajouter le projet a l'utilisateur dans projet propriétaire et ses projects
            res.json(project._doc);
        }
    });
});

/**
 * Delete a project
 */
router.delete('/deleteProject/:id', (req, res, next) => {
    let id = req.params.id;
    projectSchema.findByIdAndRemove(id, (err) => {
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
});

exports.router = router;
