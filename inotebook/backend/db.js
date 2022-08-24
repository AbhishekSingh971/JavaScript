const mongoose = require('mongoose');
const monoURI = "mongodb://localhost:27017"
const connectToMongo = ()=>{
    mongoose.connect(monoURI, ()=>{
        console.log("connect to mongo successfully")
    })
}

module.exports = connectToMongo;