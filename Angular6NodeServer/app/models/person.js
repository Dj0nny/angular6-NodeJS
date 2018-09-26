const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PersonSchema = new Schema({
    id: Number,
    name: String,
    surname: String
});

module.exports = mongoose.model('Person', PersonSchema);

