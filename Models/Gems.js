//Constantes utilizadas a lo largo del código

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const meteorID = require('meteor-mongo-id')
const Random = require('meteor-random')

//Reviews (arreglo de cuatro propiedades)

const ReviewSchema = Schema({
    stars: {
        type: Number,
        allowedValues:[5,4,3,2,1]
    },
    body:{
        type:String
    },
    author: {
        type: String
    },
    createdOn: {
        type: String
    }
})

//Caracteristicas de las gemas
const SpecsSchema = Schema ({
    faces: { type: Number },
    color: { type: String },
    
    rarity: { 

    type: Number,
    allowedValues : [1,2,3,4,5,6,7,8,9,10] },
    
    shine: { 
    type: Number,
    allowedValues : [1,2,3,4,5,6,7,8,9,10] }
})

//Forma en la que es insertada la gema a la base de datos
const GemsSchema = Schema({

    _id:{
        type:String
    },

    name: { type: String },
    description: { type: String },
    price: { type: Number },
    canPurchase: { type: Boolean },
    specs: {
        type: SpecsSchema
    },

    images: {
        type: [String],
    },

    reviews:{
        type:[ReviewSchema]
    }
    

})


module.exports = mongoose.model('Gems', GemsSchema)