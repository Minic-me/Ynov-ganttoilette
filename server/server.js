'use strict';

// Requires

const express = require('express');
const app = express();



const http = require('http').Server(app);
const path = require('path');


// Déclaration des variables
let port = process.env.PORT || 3000;



// Routing           /!\ Remplacer le dossier View par le nom du dossier qui contient votre client /!\
app.use(express.static(path.join(__dirname, '..', 'client')));

// Création du serveur
http.listen(port, () => {
  console.log('\nGANTTOILET listening at 127.0.0.1:', port);
});




var user = require('./Controller/SignController.js');
app.use('/user', user.router);
