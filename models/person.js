const mongoose = require('mongoose');

let PersonSchema = new mongoose.Schema({
    typeIdPerson: String,
    idPerson: Number,
    namePerson: String,
    lastnamePerson: String,
    addressPerson: String,
    emailPerson: String,
    phonePerson: String,
    cellphonePerson: String,
    websitePerson: String,
    profilePerson: String
})

module.exports = mongoose.model('person', PersonSchema, 'persons');