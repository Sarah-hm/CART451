//Can use either syntax, can be used in the same way

// let regexOne=/ab+c/; 

// let regExTwo = new RegExp('ab+c')

let regexOne=/abc/;
console.log(regexOne.test("hi do you know you abc's"));
console.log(regexOne.test("slab craft"));

//range, will return true
let digitExTwo = /[0-9]/;
console.log (digitExTwo.test("hi do you 9977 your abcs"));

//not a range, will return false
let digitExThree = /0123456789/;
console.log (digitExThree.test("hi do you 9977 your abcs"));

//i is modifier that makes case not sensitive, will return true *only with I*
let digitExFour = /[a-z]/i;
console.log (digitExFour.test("ALL IN UPPERCASE"));

// \d, any digit
// \w, anything that is a number or a letter
// \s, white space
// \D, Anything that is not a digit
// \W, everything that is non-word character
// \S Any non white space

console.log((/\d/).test("abcd"));

//+ is indicative or "this or more"
console.log((/[0-9]+/).test("abcd"));

//* is 0 or more
console.log((/[0-9]*/).test("abcd"));

//? 0 or 1 time
console.log((/[0-9]?/).test("abcd"));

//returns false;
console.log((/neighbou?r/).test("neighbou"));

//a sequence of 2 or 3 same digits 
console.log((/\d{2,3}/).test("1dsjdjhaskj2"));

let date_pattern = ((/\d{1,2}-\d{1,2}-\d{4}/));
//returns true
console.log((date_pattern).test("23-12-2004"));
//returns true, because doesn't control if there is *too much*, only *not enough*
console.log((date_pattern).test("233-12-2004"));
//returns false
console.log((date_pattern).test("23*12-2004"));

//when you want to use the same symbol twice, you need to put the second in ()
let boo = /boo+(hoo)+/;
console.log(boo.test("boohoo"));
console.log(boo.test("booooooooo boohooooooo "));

//^ means it should be at the start of the string, $ means it should end with exactly this
let booTwo = /^boo+(hoo)+$/;
console.log(boo.test("boohoo"));

let match = /(\d)+/.exec("123");
console.log(match);

//only apple, maybe 
let fruitCount = /\d+ (apple|pear|orange)?s$/;
console.log(fruitCount.test("10 applesauces"));

//repeat all (g) occurence of y with *
console.log("todayIsWednesday".replace(/y/g, "*"));
console.log("apple pear banana".replace(/(\w+) (\w+)/, "$2 $1"));

let rePun = /[.,; ]/
let splitR1 = ("test has won the day;").split(rePun);
console.log(splitR1);

let reSen = /[.?!]/
let splitR2 = ("test has won the day.test has won the day.test has won the day.").split(reSen);
console.log(splitR2);