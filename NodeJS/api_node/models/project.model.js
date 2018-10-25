const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
    name: String,
    description: String,
    start: Date,
    end: Date,
    value: Number,
    status: String
    //etc...
});

module.exports = mongoose.model('Project', ProjectSchema);