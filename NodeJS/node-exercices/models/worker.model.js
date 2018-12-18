const mongoose = require('mongoose');

const WorkerSchema = mongoose.Schema({
    name: String,
    firstname: String,
    username: String,
    birthdate: Date,
    adress: String,
    phonenumber: String,
    mailto: String,
    position: String
    //etc...
});

module.exports = mongoose.model('Worker', WorkerSchema);