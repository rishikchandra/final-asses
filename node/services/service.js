const mongoose = require('mongoose');

const schema = mongoose.Schema;
const details= new schema({
    firstname:String,
    lastname:String,
    address:String,
    city:String,
    state:String
})

const student = mongoose.model('customer',details);

module.exports = student;