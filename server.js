'use strict';

// Requires

const express = require('express');
const app = express();
const user = require('Controller/userController.js');
const project = require('Controller/projectListController.js');



const http = require('http').Server(app);
const path = require('path');


// Déclaration des variables
let port = process.env.PORT || 3000;



// Routing           /!\ Remplacer le dossier View par le nom du dossier qui contient votre client /!\
app.use(express.static(path.join(__dirname, 'View')));

// Création du serveur
http.listen(port, () => {
    console.log('\nGANTTOILET listening at 127.0.0.1:', port);
});

app.use('/user', user.router);

app.use('/project', project.router);
