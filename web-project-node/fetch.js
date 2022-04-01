const express = require('express')
const app = express()
const cors = require("cors");
app.use(express.json())


// const url = "mongodb+srv://Reddy:1234@cluster0.56tv7.mongodb.net/sample_airbnb?retryWrites=true&w=majority";
const url = "mongodb+srv://Reddy:1234@cluster0.56tv7.mongodb.net/sample_guides?retryWrites=true&w=majority";
const mongoose = require('mongoose')
const listingsAndReviews = require('./model/listingsAndReviews');
const User = require('./model/User');
const planets = require('./model/planets');

mongoose.connect(url, {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    })
    .then(() => console.log("Connected Succesfully"))
    .catch((err) => console.log(err));

// catch(e){
//     console.log("ERROR!");
// }

setTimeout(async () => {
    // let data = await listingsAndReviews.find();
    // let data = await User.find();
    let data = await planets.find();
    console.log(data);
    // const connection = mongoose.connection;
    // console.log(connection.models);
}, 5000);


app.get("/", (req, res)=>{
    res.send({success: true, msg: "Hello World"});
})

app.listen(3000, ()=>{
    console.log("Server started on 3000")
})



app.use(cors())

// const express = require('express')
// const app = express()

// const mclient = require('mongodb').MongoClient;
// const dburl="mongodb+srv://Reddy:1234@cluster0.56tv7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// let dbObj;

// mclient.connect(dburl,(err,dbclient)=>{
//     if(err){
//         console.log("db error");
//     }
//     else {
//          dbObj = dbclient.db();
//          console.log(dbObj);
//     }
// })


// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// //console.log(dbObj.myFirstDatabase)

// app.listen(3000)