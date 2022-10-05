class testClassMod {
    constructor(){
    //private members
      this.messageCount = 0;
      this.messages = [];
    }
     
      passMessage (message) {
        //used internally ...
         this.messageCount++;
         this.messages.push(message);
         console.log(`Message Count: ${this.messageCount}`);
     
      }
     
      printMessages () {
        for(let i =0; i< this.messages.length; i++){
           console.log(`message num: ${i} , the message: ${this.messages[i]}`);
        }
     
      }
     
    }
    module.exports = testClassMod;