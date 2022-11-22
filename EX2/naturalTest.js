let natural = require('natural')
//console.log(natural)
let tokenizer = new natural.WordTokenizer();

//stemmer is to remove plurals from words (is not perfect);
// let stemmer = natural.PorterStemmer();
let tokens = tokenizer.tokenize("the lazy dog jumped over the high fences.") // Deconstructing text into signle elements
console.log(tokens);
// console.log(stemmer.stem(tokens[7]));
let sentenceSplitter = new natural.SentenceTokenizer()
let NGrams = natural.NGrams;

let bigrams = NGrams.bigrams("the lazy dog jumped over the high fences.", 5);
console.log(bigrams)

const language = "EN";
const defaultCategory = 'N';
const defaultCategoryCapitalized = 'NMP'

var lexicon = new natural.Lexicon(language, defaultCategory, defaultCategoryCapitalized);
var ruleSet = new natural.RuleSet('EN');
var tagger = new natural.BrillPOSTagger(lexicon, ruleSet)

console.log(tagger.tag(tokens));

var wordnet = new natural.WordNet();

wordnet.lookup('node', function(results) {
    results.forEach(function(result) {
        console.log('------------------------------------');
        console.log(result.synsetOffset);
        console.log(result.pos);
        console.log(result.lemma);
        console.log(result.synonyms);
        console.log(result.pos);
        console.log(result.gloss);
    });
});