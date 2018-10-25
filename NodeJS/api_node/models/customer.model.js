const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    name: String,
    adress: String,
    contact : {
        name: String,
        firstname: String,
        phonenumber: String,
        mailto: String
    },
    
    position: String
});

module.exports = mongoose.model('Customer',CustomerSchema);