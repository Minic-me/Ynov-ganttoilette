'use strict';

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let UserSchema = new Schema ({
    nom : { type: String, required: true, trim: true },
    prenom : { type: String, required: true },
    mdp : { type: String, required: true, trim: true },
    mail : { type: String, required: true, trim: true, unique:true },
    });
    
    module.exports = mongoose.model('Hero', UserSchema);
    
var insertUser = function(newUser, callback) {
    let insert = '"nom" : "' + newUser.nom + '",'; 
      insert += '"prenom" : "' + newUser.prenom + '",';
      insert += '"mdp" : "' + newUser.mdp + '",';
      insert += '"mail" : "' + newUser.mail + '"';
      
   newUser.user('user').insertOne( {insert}, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the users collection.");
    callback();
  });
};