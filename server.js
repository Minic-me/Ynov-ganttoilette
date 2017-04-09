'use strict';

// Requires

const express = require('express');
const app = express();
const user = require('./Controller/userController.js');
const project = require('./Controller/projectListController.js');

const http = require('http').Server(app);
const path = require('path');

const mongoose = require('mongoose');

const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

//Mongoose
mongoose.connect('mongodb://localhost/ganttoilette', (error) => {
    if (error) {
        console.log(error);
        process.exit(1);
    }
});

// Déclaration des variables
let port = process.env.PORT || 3000;

// Routing           /!\ Remplacer le dossier View par le nom du dossier qui contient votre client /!\
app.use(express.static(path.join(__dirname, 'View')));

app.use(cookieParser());

// Création du serveur
http.listen(port, () => {
    console.log('\nGANTTOILET listening at 127.0.0.1:', port);
});


// Session
app.use(session({
    name: 'session',
    secret: 'caca',
    rolling: true, // reset le maxAge a chaque requete
    cookie: {
        secure: false,
        path: '/',
        maxAge: 60 * 60 * 1 * 1000 // 15 min
    },
    resave: true,
    saveUninitialized: true,
    store: new FileStore()
}));

app.use('/', (req, res, next) => {
    //console.log(res.headersSent);  <-- ne marche pas pour un sendFile
    //console.log(req.session._user);
    if (req.path === '/') {
        res.sendFile(path.join(__dirname, 'View', 'index.html'));
    }
    else {
        next();
    }
});

// page de login si non connecté
app.use('/user', (req, res, next) => {
    user.isUserConnected(req, (connected) => {
        if (!connected) {
            if (req.path === '/') {
                res.sendFile(path.join(__dirname, 'View', 'connexion.html'));
            }
            else {
                next();
            }

        }
        else {
            res.send('<script>window.location.replace("/#!/Project")</script><h1>Already connected</h1><a href="/#!/Project">->Project</a>');
            res.end();
        }
    });
});
app.use('/user', user.router);

app.use('/project', (req, res, next) => {
    user.isUserConnected(req, (connected) => {
        if (connected) {
            if (req.path === '/') {
                res.sendFile(path.join(__dirname, 'View', 'projectList.html'));
            }
            else {
                next();
            }
        }
        else {
            res.send('<script>window.location.replace("/#!/")</script><h1>No connected</h1><a href="/">->Login</a>');
            res.end();
        }
    })
});
app.use('/project', project.router);
