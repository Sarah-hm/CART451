const fs = require('fs');

class FileHandler{
    constructor(fileName){
        // pass the file name in the constructor
        this.fileContainer = fileName;
    }
 
    appendTextSync(textToAppend){
     fs.appendFileSync(this.fileContainer, textToAppend);
    }
 
    writeTextSync(texttoOverWrite){
        fs.writeFileSync(this.fileContainer, texttoOverWrite);
    }

    readTextSync(){
        // a blocking operation
        // let textRAW = fs.readFileSync(this.fileContainer);
        // return textRAW;

        let dataUTF = fs.readFileSync(this.fileContainer,'utf-8');
        return (dataUTF);
    }

}

module.exports = FileHandler;