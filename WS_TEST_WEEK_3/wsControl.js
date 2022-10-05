
const express = require('express');
const portNumber = 4200;
const WebSocket = require("ws");
const FileHandler = require('./FileHandler');
let fileReaderInstance = new FileHandler('./myFiles/inputC.txt');


const app = express(); //make an instance of express
const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server });
// create a server (using the Express framework object)
app.use(express.static(__dirname + '/public'));
app.use('/client', wsClientRequestRoute);

//default route
app.get('/', function (req, res) {
res.send('<h1>Hello world</h1>');
});

function wsClientRequestRoute(req, res, next) {
    res.sendFile(__dirname + '/public/ws.html');
}

// make server listen for incoming messages
server.listen(portNumber, function () {
    console.log('listening on port:: ' + portNumber);
})


//wss listens for the connection event for incoming sockets, and if one is connected -:
//ws is  a single socket instance
//req is the request
wss.on('connection', function connection(ws, req) {

  
    // // regardless of type of message this is always the trigger function
    ws.on('message', function incoming(message) {
        //console.log("received");
        //console.log('received: %s', message);
        let jsonParse = JSON.parse(message);
        console.log(jsonParse);
        if (jsonParse.eventName === "default") {
            console.log("DEFAULT");
            //console.log(jsonParse.payload);
           sendInitMessage(ws,req);
        }
        if (jsonParse.eventName === "text_one") {
            console.log("write-one");
            console.log(jsonParse.payload);
             saveTextA(ws,jsonParse.payload);
 }
 if (jsonParse.eventName === "read_one") {
    console.log("read-one");;
     readAndSendA(ws);
  }
    }); //one
}); //connect

function sendInitMessage(ws ,req){
    const ip = req.connection.remoteAddress;
    console.log(`a connection has been established from ${ip}`);
    ws.send(JSON.stringify({ eventName: 'server_connect', payload: "success init" }));
}

function saveTextA(ws,text){
    ws.send(JSON.stringify({ eventName: 'text_one_s', payload: "success for text one" }));
    //fileReaderInstance.writeTextSync(text);
//OR
fileReaderInstance.appendTextSync(text);
}

function readAndSendA(ws){
    //send back
    //OUTPUT RAW/UTF
    let theDataRead = fileReaderInstance.readTextSync(); 
    console.log(theDataRead);
    ws.send(JSON.stringify({ eventName: 'text_one_r', payload: theDataRead }));
}



// // IMPLEMENT THE BROADCAST FUNCTION TO ALL
// wss.broadcast = function broadcast(data) {
//     //get all clients (note that the Socket server instance does maintain a list of clients)
//     wss.clients.forEach(function each(client) {
//         //if client is there
//         if (client.readyState === WebSocket.OPEN) {
//             client.send(data);
//         }
//     });
// };
