


window.onload = function () {
 


      $.get(
        "/getData", // Specific route
        function (response) {

          

          
            // console.log(response);

            let window = document.querySelector('.window');
            let width = 9*(window.offsetWidth/10);
            let height = 9*(window.offsetHeight/10);

          $(window).empty();

            //console.log(width, height);
            for (let i=0; i<response.length;i++){

               // console.log(response[i].key)
               
                let id = [i]
                //  console.log(response[i].score);
                 let textSize = (response[i].score)*60000

                 let wordXpos = Math.floor(Math.random() * width)
                 let wordYpos = Math.floor(Math.random() * height)

                // console.log(wordXpos, wordYpos)

                $(".window" ).prepend( `<div class = "word" id = "${id}"> ${response[i].key}</div>`)
                 
                $(`#${id}`).css("font-size",`${textSize}px`);
                $(`#${id}`).css("top",`${wordYpos}px`);
                $(`#${id}`).css("left",`${wordXpos}px`);

                 }
                
   $(".slider").on("input", showVal);

   function showVal(){

    let sliderVal = $(this).val()

    let startRange = sliderVal-100;
    let endRange = sliderVal+100; 

    for (let i=0; i<response.length;i++){

    if([i]>= startRange && [i]<= endRange){
      $(`#${[i]}`).addClass("wordShowing")
    } else {
      $(`#${[i]}`).removeClass("wordShowing");
    }


    }


    // let rangeVal = value;
//console.log(val);
// let startRange = rangeVal-100;
//let endRange = rangeVal+100; 
                
                
                //console.log(textSize);
             }
        }
      ); //get
    }; //click function
