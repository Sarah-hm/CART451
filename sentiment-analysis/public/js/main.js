$(document).ready(go);

function go(){
  console.log("we are ready to go");

  $("#getRes").click(getSentiment);
 
  function getSentiment(){
    let phrase = $("#sentimentSearch").val();
    console.log(phrase);
    let mData={clientPhrase:phrase};
 
    /*** request ***/
    $.ajax({
               type: "POST",
               data: JSON.stringify(mData),
               url:'/getSentiment',
               processData: false,
               contentType: "application/json",
               cache: false,
               timeout: 600000,
               success: function (response) {
               //reponse is a STRING
               console.log("we had success!");
               console.log(response);
               parseResponse(response);
              },
              error:function(e){
            console.log(e);
             console.log("error occurred");
           }
         });
 
  } //get sentiment
  
  function parseResponse(response){
    console.log(`Score: ${response.score}`)
    console.log(`Tokens: ${response.tokens}`)
    console.log(`Words: ${response.words}`)
    console.log(`Positive: ${response.positive}`)
    console.log(`Negative: ${response.negative}`)

   $("#resultsContainer").empty();
   let list = $("<ul>");
   $("#resultsContainer").append(list);
   $(list).append($("<li>").html('Score: ' + response.score));
   $(list).append($("<li>").html('tokens: ' + response.tokens.join(', ')));
   $(list).append($("<li>").html('positive words: ' + response.positive.join(', ')));
   $(list).append($("<li>").html('negative words: ' + response.negative.join(', ')));
   $(list).append($("<li>").html('words considered: ' + response.words.join(', ')));
}
}
