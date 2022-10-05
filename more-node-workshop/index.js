//FOR testmodule.js

//add a reference to the module... 
//./ is added when the information is not part of already existing modules (if you made it yourself)
// const testModuleVar = require('./testModule');
// //call the function name ... 
// console.log('Results: ' + testModuleVar.name());
// testModuleVar.setPetName("Santiago");
// console.log(testModuleVar.getPetName());

//for staticModule.js

const testModuleClass = require('./classModule');
//using "classes" -> no we are not having to "invoke" -> gives us a REF to the base definition....
//The require statement gives you what many other languages call the base type.
console.log(testModuleClass);
 
//make two seperate instances..
let instA = new testModuleClass();
console.log(instA);
instA.passMessage("testMessage Again");
instA.passMessage("testMessageTwo Again");
instA.printMessages();
console.log(instA);
 
 
let instB = new testModuleClass();
console.log(instB);
instB.passMessage("testMessageOnB Again");
instB.printMessages();
console.log(instB);