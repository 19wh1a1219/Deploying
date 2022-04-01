const express = require('express')
const app = express()
const cors = require("cors");
app.use(express.json())

const url = "mongodb+srv://Reddy:1234@cluster0.56tv7.mongodb.net/sample_guides?retryWrites=true&w=majority";
const mongoose = require('mongoose')
const listingsAndReviews = require('./model/listingsAndReviews');
const User = require('./model/User');
const planets = require('./model/planets');
const { ServerApiVersion } = require('mongodb');

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log("Connected Succesfully"))
.catch((err) => console.log(err));

let data;

app.get("/api/data", (req, res) => {
    try{
        res.send({success:true, data: data});
    }
    catch{
        res.send({success: false});
    }
})

setTimeout(async () => {
    data = await planets.find();
    console.log(data);
}, 5000);

console.log("Hello World");

// if(process.end.NODE_ENV == "production") {
//     appendFile.use(express.static("web-project/build"));
// }

myServer.listen(process.env.PORT || 3000);
