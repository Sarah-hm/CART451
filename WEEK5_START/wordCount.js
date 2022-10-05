class WordCount{
    constructor() {
      //going to keep track of which words were found and how many
      this.dict = {};
      this.keys = [];
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
  process(data) {
    let tokens = this.split(data);
   // console.log(tokens);
    // For every token
    for (let i = 0; i < tokens.length; i++) {
      // Lowercase everything to ignore case
      let token = tokens[i].toLowerCase();
      //is it a valid word?
      if(this.validate(token) ===true){
        //add token to the dictionary if not already
        //if it is then increment the dict count
          this.addToDict(token);
      }
  
  
  
    }
  }
  
  
  // An array of keys
  getKeys() {
    return this.keys;
  }
  
  // Get the count for a word
  getCount(word) {
    return this.dict[word];
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
  //console.log(this.dict);
  //this.sortByCount();
    for (let i = 0; i < this.keys.length; i++) {
      console.log(this.keys[i] + ': ' + this.dict[this.keys[i]]);
    }
  }
  
}
  
module.exports = WordCount;