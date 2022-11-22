class TFIDF{
    constructor() {
      //going to keep track of which words were found and how many
      this.dict = {};
      this.keys = [];
      this.totalwords = 0;

      this.scores = [];
  }
  
  //split the text:
  // Splitting up the text
  split(text) {
    //console.log("in splitter")
    // Split into array of tokens
    //\W	A nonalphanumeric character
    return text.split(/\W+/);
  }
  
  // A function to validate a token
  //don't want single letter words
  validate(token) {
    //is it a word of 2 or more chars
    return /\w{2,}/.test(token);
  }
  
  // Process new text
  termFreq(data) {
    let tokens = this.split(data);
   // console.log(tokens);
    // For every token
    for (let i = 0; i < tokens.length; i++) {
      // Lowercase everything to ignore case
      let token = tokens[i].toLowerCase();
      //is it a valid word?
      if(this.validate(token) ===true){
        //add token to the dictionary if not already
       // NEW helper method
          this.increment(token);
          this.totalwords++;
      }
  
  
  
    }
  }

    // Get the document frequencies across all documents
    docFreq(data) {
        let tokens = this.split(data);
    
        // A temporary dictionary of words in this document
        let tempDict = {};
        // For every token
        for (let i = 0; i < tokens.length; i++) {
          // Lowercase everything to ignore case
          let token = tokens[i].toLowerCase();
          // Simpler we just need to see if it exists or not
          if (this.validate(token) && tempDict[token] === undefined) {
            tempDict[token] = true;
          }
        }
    
        for (let i = 0; i < this.keys.length; i++) {
          let key = this.keys[i];
          // Does this word exist in this document?
          if (tempDict[key]) {
            this.dict[key].docCount++;
          }
        }
      }

      // Increment the count for one word
  increment(word) {
    // Is this a new word?
    if (this.dict[word] == undefined) {
      this.dict[word] = {};
      this.dict[word].count = 1;
      this.dict[word].docCount = 0;
      this.dict[word].word = word;
      this.keys.push(word);
      // Otherwise just increment its count
    } else {
      this.dict[word].count++;
    }
  }
  
      // Get the score for one word
  getScore(word) {
    return this.dict[word].tfidf;
  }
  
  // An array of keys
  getKeys() {
    return this.keys;
  }
  
  // Get the count for a word
  getCount(word) {
    return this.dict[word];
  }

  // Sort by TFIDF score
  sortByScore() {
    // A fancy way to sort each element
    // Compare the counts
    let tfidf = this;
    this.keys.sort(function(a, b) {
      return (tfidf.getScore(b) - tfidf.getScore(a));
    });
  }
  
  // Increment the count for a word
  addToDict(word) {
    // Is this a new word?
    if (!this.dict[word]) {
      this.dict[word] = 1;
      //keeing track of the keys...
      this.keys.push(word);
      // Otherwise just increment its count
    } else {
      this.dict[word]++;
    }
  }
  
  logTheDict(){

  //this.sortByCount();

    for (let i = 0; i < this.keys.length; i++) {
     console.log(this.keys[i] + ': ' 
      + "count: "+ this.dict[this.keys[i]].count + " "
      + "doc Count: "+ this.dict[this.keys[i]].docCount + " "
     // + "word: "+ this.dict[this.keys[i]].word+ " "
       + "tfidf: "+ this.dict[this.keys[i]].tfidf+ " "
      
      );


    }
  }

//create key pairs array with all words (key) and tfidf score (score)
createTFIDFarray(){
  
 // run through all the words available in the dict
  for (let i = 0; i < this.keys.length; i++){
    //push words + their score in a key pair array
    
    //console.log(this.keys[i], this.dict[this.keys[i]].tfidf);
    this.scores.push({key: this.keys[i], score: this.dict[this.keys[i]].tfidf});
  
  }
  //return the key pair array
  //console.log(this.scores)
  return this.scores;
}




  //Sort array of keys by counts
sortByCount() {
    // A fancy way to sort each element
    // Compare the counts
        // For this function to work for sorting, we
    // to store a reference to this so the context is not lost!
    let tfidf = this;
    
    this.keys.sort(
      function(a,b) {
        //diff..
      return (tfidf.getCount(b) - tfidf.getCount(a));
    });
  }

    // Finish and calculate everything
    finish(totaldocs) {

        //console.log(totaldocs)
        // calculate tf-idf score
        for (let i = 0; i < this.keys.length; i++) {
          let key = this.keys[i];
          let word = this.dict[key];
         // console.log(word);
         let tf = word.count / this.totalwords;
         //let tf = word.count;

         //console.log(totaldocs / word.docCount);
          // See:
          let idf = Math.log10(totaldocs / word.docCount);
          word.tfidf = tf * idf;

        }
      }


  
  
}
  
module.exports = TFIDF;