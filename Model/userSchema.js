'use strict';

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let UserSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(v);
            },
            message: '{VALUE} is not a valid email!'
        },
    },
    projectOwned: {
        type: [String],
        trim: true
    },
    // ses projets (propriétaire et rejoind)
    projectShared: {
        type: [String],
        trim: true
    },
});

module.exports = mongoose.model('User', UserSchema);
