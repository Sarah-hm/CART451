window.onload=function(){
    console.log("client js POST loaded");

//submit
// form
$( "#formFavs" ).submit(function( event ) {
    event.preventDefault();
  // get the form data ...
   
  let myForm = document.getElementById('formFavs');
  let mData =  new FormData(myForm);
  /* Display the key/value pairs
  for(let pair of mData.entries()) {
     console.log(pair[0]+ ', '+ pair[1]);
   }*/
      $.ajax({
                 type: "POST",
                 enctype: 'multipart/form-data', // ONLY if we were sending other data (i.e. files, images, etc ... )
                 url: "/dataUpload",
                 data: mData,
                 processData: false,//prevents from converting into a query string
                 contentType: false,
                 cache: false,
                 timeout: 600000,
                 success: function (response) {
                 //reponse is a STRING
                 console.log("we had success!");
                 console.log(response);
                },
                error:function(){
               console.log("error occurred");
             }
           });
         })//submit


  };
