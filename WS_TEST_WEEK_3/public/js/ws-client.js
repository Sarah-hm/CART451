window.onload = function () {
  console.log("client js loaded in ws example");
  //use current time as a unique id (ms)
  myID = Date.now();
  console.log(myID);
  document.getElementById("willPut").innerHTML = myID;

  //make an instance ... using the inbuilt WebSocket API (browser side)
  /* Establishing a WebSocket relies on the HTTP Upgrade mechanism , so the request for the protocol upgrade is implicit 
   * when we address the web server as ws://www.example.com or wss://www.example.com.
   *  We are upgrading the HTTP conncection to a web socket connection
   * The WebSocket() constructor doees all the work to create the initial http connection and the handshaking protocol for you
   */

  let ws = new WebSocket("ws://localhost:4200");
  //1: when the connection is open (setup)
  ws.onopen = function () {

    document.querySelector("#button_1").addEventListener("click", function (event) {
      event.preventDefault();
      //console.log(document.querySelector("#textAreaTest").value);
      let textData = document.querySelector("#textAreaTest").value
      ws.send(JSON.stringify({ eventName: 'text_one', payload: textData }));
 
      //reset
      document.querySelector("#textAreaTest").value = ""
 
    })

    document.querySelector("#button_1R").addEventListener("click", function (event) {
      event.preventDefault();
     //A:::make a request for A text
      ws.send(JSON.stringify({ eventName: 'read_one', payload: '' }));
    })

    //OPTION 1:: 
    // Web Socket is connected, send data using send()
    //ws.send(`Sending a Message from ${myID}`);
    //OPTION 1A::
    ws.send(JSON.stringify({ eventName: 'default', payload: `Sending a Message from ${myID}` }));

    ws.onmessage = function (event) {
      //let receivedMsg = event.data;
      let jsonParse = JSON.parse(event.data);
      console.log("Message is received..." + jsonParse.payload);
      if(jsonParse.eventName ==="text_one_r"){
        //B::: put into A
        document.querySelector("#response_A").textContent = jsonParse.payload;
      }
    };

  } //on open
  //when websocket closes
  ws.onclose = function () {

    // websocket is closed.
    console.log("Connection is closed...");
  };





} // onload
