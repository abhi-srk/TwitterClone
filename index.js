require('dotenv').config();
const express = require('express'); // import express;
const app = express(); //it will return the express application;
const {router} = require("./router/route");
const {connectToMongo} = require("./db");

connectToMongo();

app.use(router);

const PORT = process.env.PORT || 5500;
console.log(PORT);


app.listen( PORT, ()=>{
    console.log("server started");
})

