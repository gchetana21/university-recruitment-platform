const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const hrSchema = new Schema({
    username:{
        type: String
    },
    hrcompanyname:{
        type: String,
    }
   

})

hrSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Hr', hrSchema);