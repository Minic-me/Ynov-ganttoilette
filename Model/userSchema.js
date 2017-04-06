'use strict';

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let UserSchema = new Schema({
    nom: {
        type: String,
        required: true,
        trim: true
    },
    prenom: {
        type: String,
        required: true
    },
    mdp: {
        type: String,
        required: true,
        trim: true
    },
    mail: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    projectOwned: {
        type: String,
        required: true,
        trim: true
    },
    projectShared: {
        type: String,
        required: true,
        trim: true
    },
});

module.exports = mongoose.model('User', UserSchema);
