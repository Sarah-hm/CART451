window.onload = function () {
  console.log("client js loaded in ws example");

  //use current time as a unique id (ms)
  myID = Date.now();
  console.log(myID);
  document.getElementById("willPut").innerHTML = myID;
 /* Establishing a WebSocket relies on the HTTP Upgrade mechanism , so the request for the protocol upgrade is implicit 
   * when we address the web server as ws://www.example.com or wss://www.example.com.
   *  We are upgrading the HTTP conncection to a web socket connection
   * The WebSocket() constructor doees all the work to create the initial http connection and the handshaking protocol for you
   */

 //Called ws here, but it is not the same as the server side 'ws'. However, it is the other side of the same connection, and therefore doing basically the same thing, but on the other side (client); 
  let ws = new WebSocket("ws://localhost:4200");
//1: when the connection is open (setup)
  ws.onopen = function () {


 //2: when we receive something
 ws.onmessage = function (event) {
  let receivedMsg = event.data;
  console.log("Message is received..." + receivedMsg);
  document.getElementById("response").innerHTML = receivedMsg;
};


//default
    ws.send(JSON.stringify({ eventName: 'default', payload: `Sending a Message from ${myID}` }));
 
    //OPTION 1:: 
    // Web Socket is connected, send data using send()
    // ws.send(`Sending a Message from ${myID}`);

    //2::
    //when string labels pressed then send A or B or C ... (string)
    //querySelectorAll = selects all items named that way, .forEach keeps an array of them all and iterates through them
    document.querySelectorAll(".sendItem").forEach(
      function (item) {
        item.addEventListener("click", function () {
          console.log(this.getAttribute("data-send"));
          // ws.send(`Sending a Message from ${myID} with message: ${this.getAttribute("data-send")}`);
           //STRING label message
    ws.send(JSON.stringify({ eventName: 'stringLabel', payload: `Sending a Message from ${myID} with message: ${this.getAttribute("data-send")}` }));
 
        })
 
      });
 
    //when send as json labels are pressed
 
    document.querySelectorAll(".sendItemJ").forEach(
      function (item) {
        item.addEventListener("click", function () {
          //custom made attribute through html, you can customize any attribute to any tag, as long as you know how to reference them specifically
          console.log(this.getAttribute("data-send"));
 
          const msg = {
            type: "message",
            text: this.getAttribute("data-send"),
            id: myID
          };
 
          // Send the msg object as a JSON-formatted string.
          // ws.send(JSON.stringify(msg));
          ws.send(JSON.stringify({ eventName: 'jsonLabel', payload: msg }));
        })
      });

      //for input
    const input = document.querySelector("input[type=file]");
    input.addEventListener('change', function () {
      let file = input.files[0];
  //now send ... 
      // ws.send(file);
    //JSON label message
 
    });
  }
 
  //2: when websocket closes
  ws.onclose = function () {
 
    // websocket is closed.
    console.log("Connection is closed...");
  };
 }

 