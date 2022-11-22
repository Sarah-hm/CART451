// $(document).ready(function(){


    
// })

window.onload = function () {
 

      $.get(
        "/getData", // Specific route
        function (response) {

            // console.log(response);

            let window = document.querySelector('.window');
            let width = window.offsetWidth;
            let height = window.offsetHeight;

            console.log(width, height);
            for (let i=0; i<response.length;i++){

                 //console.log(response[i].key, response[i].score)
               
                 let id = [i]
                //  console.log(response[i].score);
                 let textSize = (response[i].score)*60000

                 let wordXpos = Math.floor(9*(width/10) * Math.random())
                 let wordYpos = Math.floor(9*(height/10) * Math.random())

                 $(".window" ).append( `<div class = "word" id = "${id}"> ${response[i].key}</div>`)
                 
                 $(`#${id}`).css("font-size",`${textSize}px`);
                  $(`#${id}`).css("top",`${wordYpos}px`);
                  $(`#${id}`).css("left",`${wordXpos}px`);

                 console.log(textSize);
             }


          //console.log("page content: " + Object.fromEntries(response));
        }
      ); //get
    }; //click function
