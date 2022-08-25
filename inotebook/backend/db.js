const mongoose = require('mongoose');
const monoURI = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.1tynyfo.mongodb.net/test"
const connectToMongo = ()=>{
    mongoose.connect(monoURI, ()=>{
        console.log("connect to mongo successfully")
    })
}

module.exports = connectToMongo;