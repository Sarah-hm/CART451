//let natural = require('natural')
const express = require('express');
const portNumber = 4200;
const app = express();

const TFIDF = require('./TFIDF');
let fs = require('fs');
//console.log(natural)

// create a server (using the Express framework object)
app.use(express.static(__dirname + "/public"));
app.use("/client", clientRoute);
app.use("/getData", getDataCallback);

let tempStr = "";
let tfIDF = new TFIDF();

//stemmer is to remove plurals from words (is not perfect);
// let stemmer = natural.PorterStemmer();

loadSamples();




function clientRoute(req, res, next) {
    // console.log("hello");

    res.sendFile(__dirname + "/public/client.html");
  
  }

function loadSamples(){
    let filenames = ['emily_Bain.txt','joelle_Collin.txt', 'manuel_Souris.txt', 'mitchell_Lanecki.txt',
    'patrizio_McLelland.txt', 'sarah_hm.txt'];

    for (let i = 0; i < filenames.length; i++) {
        getTermFreq(filenames[i]);
    }

    for (let i = 0; i < filenames.length; i++) {
        getDocFreq(filenames[i]);
    }
    tfIDF.finish(filenames.length);
    tfIDF.sortByScore();
    //tfIDF.logTheDict();


    //tfIDF.getScore();

    tfIDF.createTFIDFarray();
    // tempStr = tfIDF.dict[tfIDF.keys[0]].tfidf;
    //make an array with all TGIF information -> 

}

function getDocFreq(filename) {
      let data =  fs.readFileSync('files/' + filename, 'utf8');
      tfIDF.docFreq(data);
     }
    
function getTermFreq(filename) {
     let data =  fs.readFileSync('files/' + filename, 'utf8');
     tfIDF.termFreq(data);
     }

function getDataCallback(request, response){

let tfidfScores = tfIDF.createTFIDFarray();

//console.log(Object.values(tfidfScores))
console.log("we get the data here")
// console.log(tfIDF.createTFIDFarray().length)

for (let i=0; i<tfidfScores.length;i++){
   // console.log(tfidfScores[i].key);
}

response.send(tfidfScores);

}

app.listen(portNumber, function () {
    console.log("Server is running on port " + portNumber);
  });