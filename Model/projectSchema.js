'use strict';

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let projectSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    owner: {
        type: String,
        required: true
    },
    dateCreate: {
        type: Date,
        required: true,
        trim: true
    },
    users: {
        type: String,
        required: true,
        trim: true
    },
    gantt: {
        type: Object,
        required: true
    },
    chat: {
        type: Object,
        required: true
    }
});

module.exports = mongoose.model('Project', projectSchema);
