// convention to have the library referenced called the same as the variable used for it; 
let express = require('express');

const fileuploadMiddleWare = require("express-fileupload");


// when creating your own port number, go with anything above 1000; under 1000 is reserved by other things on your computer
const portNumber =4200;
const app = express();

// two parameters required, 1) what is the path that the user took, 2) what are we going to do about it (if they do take that route/path);
//By default, the get response gives a request(URL) and response(what is written back to the client)
//app.get is a specific case of app.use;
app.get('/', requestHandler);

// ordering really matters here, it *needs* to be before the app.use(express.static) request. Because if everything is made public already, 
// then the request to errorRoute will not go through
app.use('/banana.html',errorRoute);

// order matters, this should be first, before using any other urls, so that the public folder becomes visible on the client side;
// you don't need to specify a route for it, as long as it is in the /public folder;
app.use(express.static(__dirname + '/public'));

//fwd the requests.... (using a filter), it is a middleware? as opposed to app.get
app.use('/veg',vegRoutes);
app.use('/fruit',fruitRoutes);

//specify that if client writes only "banana" (and not banana.html), they will be redirected to the banana.html page;
app.use('/banana',bananaRoute);

//important to be after
app.use('/passingTheVars',handleGetVars);

app.use(fileuploadMiddleWare());
app.use('/dataUpload',handlePostedData);


function requestHandler(request,response){
    // send a default response to the client...
    response.send("HELLO WORLD");
    console.log(request); //built in
    console.log(response); //built  in
    console.log(request.url);
    }

function fruitRoutes(req, res, next){
   // req is the Node.js http request object
  // res is the Node.js http response object
  // next is a function to call to invoke the next middleware
  console.log("IN FRUIT FUNCTION ");
  console.log(req.url);
  res.send("WE ARE HERE FRUIT ROUTE");
}

function vegRoutes(req, res, next){
    // req is the Node.js http request object
   // res is the Node.js http response object
   // next is a function to call to invoke the next middleware
   console.log("IN VEG FUNCTION ");
   console.log(req);
  res.send("WE ARE HERE VEG ROUTE");
 }

 function bananaRoute(req, res, next){
    res.sendFile(__dirname + '/public/banana.html');
 }

  //new error route:
  function errorRoute(req, res, next){
    const error = new Error('Not valid url');
    res.send(error.message);
}

function handleGetVars(request,response,next){
  console.log(request.url);
  console.log(request.query);
  response.send("GOT IT! THANKS!");
}

function handlePostedData(request,response){
  console.log(request.body); //body of packet
  console.log(request.files); //request

  //request file from file upload
if(!request.files)
{
    response.send("File was not found");
    return;
}
// using the name attributes of the form fields ...
console.log("the color chosen:: "+request.body.color);
  console.log("the favorite city chosen:: "+request.body.city);

// here is the field name of the form
let  temp_file = request.files.imageF;

 let imagePath  = __dirname + '/public/images/'+request.files.imageF.name;
// Use the mv() method to place the file somewhere on your server
temp_file.mv(imagePath, function(err) {
if (err)
    return response.status(500).send(err);
    response.send('File uploaded!');
 });

}


// listen is a method from the express library, listens forever until the program fully stops
app.listen(portNumber, function () {
    console.log("Server is running on port "+portNumber);
  });

  