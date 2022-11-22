
let WordCount= require('./wordCount');


let fs = require('fs');

let file = fs.readFileSync('files/manuel_Souris.txt', 'utf8'); // Dosen't continue until file is read




// An object that acts as dictionary of words and counts
let wordCount = new WordCount();
wordCount.process(file);
wordCount.sortByCount();
wordCount.logTheDict();