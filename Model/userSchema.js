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
        unique: true
    },
    projectOwned: {
        type: [String],
        trim: true
    },
    projectShared: {
        type: [String],
        trim: true
    },
});

module.exports = mongoose.model('User', UserSchema);
