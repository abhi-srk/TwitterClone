const mongoose = require('mongoose');
require('dotenv').config()

const connectToMongo=()=>{
    mongoose.connect(process.env.Mongo_URI)
    .then(()=>{
        console.log("connected to mongodb")
    })
    .catch(()=>{
        console.log("connection to mongodb is failed");
    });


}

module.exports={connectToMongo};