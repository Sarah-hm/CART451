let messageCount = 0;
 
//the object to return -> could have > 1 function associated.
//define as object
let sharedMessageModule = {};
 
//put the things in the object
sharedMessageModule.passMessage = function (message) {
   messageCount++;
  console.log(`Message ${messageCount}: ${message}`);
  return;
}
 
//only return an object
module.exports = sharedMessageModule;