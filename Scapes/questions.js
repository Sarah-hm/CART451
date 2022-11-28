fetch('questions.json')
    .then((response) => response.json())
    .then((json) => readQuestions(json));

    function readQuestions(data){
        for (let i = 0; i< data.questions.length; i++){
            let questionNum = [i]
            console.log(`Questions #`+ questionNum)
            console.log(data.questions[i]);
            console.log(data.answers[i])
        }
    }