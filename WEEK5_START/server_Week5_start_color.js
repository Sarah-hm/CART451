const express = require("express");

const portNumber = 4200;
const app = express(); //make an instance of express
const server = require("http").createServer(app);

let bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use('/varsToMongo',handleGetVars);

//2A
//https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");
//1A
//https://nodejs.dev/en/learn/how-to-read-environment-variables-from-nodejs/
require("dotenv").config();

/** 1B for the mongo connection */
const url = process.env.MONGODB_URI;

//2B
mongoose.connect(url);
let db = mongoose.connection;

//you must connect to yyour generated mongoose model
const ColorGroups= require("./db_config/colorGroup.js");



//2C
db.once("open", async function () {

//DO THIS ONCE
//setUpGroups();



}) //connect

function setUpGroups(){
   let groupsArr =  [
        {
          color: "purple",
          name: "the aubergines"
        },
        {
            color: "yellow",
            name:"the sunshine group"
        },
        {
            color:"blue",
            name:"in the sky or sea"
        },
        {
            color:"pink",
            name:"fancy!"
        },
        {
            color:"green",
            name:"seaweed"
        }
      ]
    ColorGroups.insertMany(groupsArr, (err, docs) => {
       console.log(docs);
      })
}


// make server listen for incoming messages
server.listen(portNumber, function () {
  console.log("listening on port:: " + portNumber);
});
// create a server (using the Express framework object)
app.use(express.static(__dirname + "/public"));
app.use("/participant", parRoute);
//default route
app.get("/", function (req, res) {
  res.send("<h1>Hello world</h1>");
});

function parRoute(req, res, next) {
  res.sendFile(__dirname + "/public/participant.html");
}

/// use this VERB for getting posted data... 9
app.post('/postForm',handlePost);
 
// the callback
function handlePost(request,response){
  console.log(request.body);
  //now we want to save the data in the db

}

//EXAMPLE of  user making a query ... 10
async function  handleGetVars  (request,response,next){
  console.log(request.url);
  console.log(request.query.paramOne);
}

