const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blodsukkerSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    blodsukker:{
        type: Number,
        default: null,
        required: true
    },
    insulin: {
        type: Number,
        default: null,
        required: false
    }
});

module.exports = blodsukker = mongoose.model('blodsukker', blodsukkerSchema);

