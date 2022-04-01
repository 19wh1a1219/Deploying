const express = require('express')
const app = express()
const cors = require("cors");
app.use(express.json())


// const url = "mongodb+srv://Reddy:1234@cluster0.56tv7.mongodb.net/sample_airbnb?retryWrites=true&w=majority";
const url = "mongodb+srv://Reddy:1234@cluster0.56tv7.mongodb.net/sample_guides?retryWrites=true&w=majority";
const mongoose = require('mongoose')
const listingsAndReviews = require('../model/listingsAndReviews');
const User = require('../model/User');
const planets = require('../model/planets');

let sendData = express.Router().get("/", (req, res) => {
    mongoose.connect(url, {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
    .then(() => console.log("Connected Succesfully"))
    .catch((err) => console.log(err));

    setTimeout(async () => {
        let data = await planets.find();
        console.log(data);
        // const connection = mongoose.connection;
        // console.log(connection.models);
    }, 5000);
})

module.export = sendData;