class questionnaire
{

    getCorrectAnswer(questions)
    {
        let correctAnswer = {};

        for (let i = 0; i < questions.length; i++)
        {
            correctAnswer[i] = 0;
        }

        questions.forEach( question =>
        {

        });

        questions.forEach(answer => {
            let indexAswer = answers.indexOf(answer)
            let input = answer.querySelectorAll('input');
            input.forEach(input => {
               if (input.value === 'correct') {
                   correctAnswer++;
               }
            });
        });

        return correctAnswer;
    }

    checkAnswer(question, answers, correctAnswer)
    {
        let answers = document.querySelectorAll('.answers');
        let userCorrectAnswer = 0;

        answers.forEach(answer => {
           let input = answer.querySelectorAll('input');
           input.forEach(input => {
              if (input.checked) {
                  userCorrectAnswer++;
              }
           });
        });
    }

    incrementScore(score)
    {

    }

}