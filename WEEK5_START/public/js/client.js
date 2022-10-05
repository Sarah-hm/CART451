window.onload = function () {
  console.log("we are loaded");

  //GET
  document.querySelector("#findData").addEventListener('click', function(event){

    let searchCrit =   document.getElementById("searchCrit").value;
    $.get(
      "/varsToMongo",
      {paramOne : searchCrit},
     // if we get a response from the server .... 
      function(response) {
         //console.log('page content: ' + response);
         console.log(response[0]);
         document.querySelector("#response").innerHTML = response[0].host_name +  " " +response[0].neighbourhood_group;
      }); //get
  })

  //POST
  document.querySelector("#sendData").addEventListener('click', 
    function(event){
      event.preventDefault();
      console.log("clicked");
      let mData={
        host_name:document.querySelector("#host_name").value,
        nbgn_grp:document.querySelector("#neighbour_hood_group").value,
        house_rules:document.querySelector("#house_rules").value
      
      };
      console.log(mData);


      /*** request ***/
    $.ajax({
               type: "POST",
               data: JSON.stringify(mData),
               url:'/postForm',
               processData: false,
               contentType: "application/json",
               cache: false,
               timeout: 600000,
               success: function (response) {
               //reponse is a STRING
               console.log("we had success!");
               console.log(response);
              
              },
              error:function(e){
            console.log(e);
             console.log("error occurred");

           }
         });


  });
};
