//Constantes utilizadas a lo largo del código
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Forma del registro de usuario en la base de datos
const UserProfileSchema = Schema({
    name : {
        type: String
    },
    phone : {
        type: String,
        optional: true
    },
    email : {
        type: String
    },
    roles : {
        type : [String],
        allowedValues : ['admin', 'manager', 'developer']
    },
    password : {
        type : String
    }
})

module.exports = mongoose.model('Users', UserProfileSchema)