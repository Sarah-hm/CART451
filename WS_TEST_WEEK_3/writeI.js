const fs = require('fs');

const fileContainer = './myFiles/fileA.txt';

let data = "this is my test string written at "+(new Date)+"to "+fileContainer;
fs.writeFileSync(fileContainer, data);

let dataTwo= "this is my second test string written at "+(new Date)+"to "+fileContainer;
fs.writeFileSync(fileContainer, dataTwo);

//writeFileSync *overwrites* whatever was written on that file before (data and dataTwo will NOT exist); it however creates a file if it doesn't exist.
let dataThird = "this is my third test string written at "+(new Date)+"to "+fileContainer+"\n"+"more text on second line";
fs.writeFileSync(fileContainer, dataThird);

//Appends *adds* to the data that was already there, it however does not *create* a file that doesn't already exist
let textToAppend = "\n" + (new Date) + " Text copied and appended  to " + fileContainer;
fs.appendFileSync(fileContainer, textToAppend);