// $(document).ready(function(){


    
// })

window.onload = function () {
 

      $.get(
        "/getData", // Specific route
        function (response) {

            // console.log(response);

          

            for (let i=0; i<response.length;i++){

                 console.log(response[i].key, response[i].score)
               

                let div = document.createElement('div');
                div.innerHTML = response[i].key;
                document.body.appendChild(div);

                // const box = document.createElement("div");

                

                // let word = `
                //     <div class= "word" id=${[i]}>
                //     <p> ${response[i].key} </p>
                //     </div>`;

                //     document.body.innerHTML = word;

             }


          //console.log("page content: " + Object.fromEntries(response));
        }
      ); //get
    }; //click function
