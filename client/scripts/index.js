class questionnaire
{
    constructor(questions, inputAnswers, score) {
        this.questions = questions;
        this.inputAnswers = inputAnswers;
        this.score = score;
    }

    getCorrectAnswer(questions)
    {
        questions.forEach( () => {
            let inputs = questions.querySelectorAll('input');
            let inputsArray = Array.from(inputs);

            for (let i = 0; i < inputsArray.length; i++) {
                if (inputsArray[i].value === 'correct') {
                    questions[i].push(inputsArray[i]);
                }
            }
        });
    }

    checkAnswer(questions, inputAnswers)
    {
        questions.forEach( () => {
            let inputs = questions.querySelectorAll('input');
            let inputsArray = Array.from(inputs);

            for (let i = 0; i < inputsArray.length; i++) {
                if (inputsArray[i].value === 'correct' && inputsArray[i].checked) {
                    inputAnswers[i].push(inputsArray[i]);
                }
            }
        });
    }

    calculateScore(questions, inputAnswers)
    {
        for (let i = 0; i < questions.length; i++) {
            if (inputAnswers[i].length === questions[i].length) {
                this.score++;
            }
        }
    }
}

let questions = document.querySelectorAll('.questions');
let next = document.querySelector('.next-button');
let previous = document.querySelector('.previous-button');

next.addEventListener('click', e => {
   let currentQuestion = e.target;

   let question = document.querySelector('.questions:not(.hide)');
});

questions.forEach(question => {
    let questionnaire= new questionnaire(question);
    questionnaire.getCorrectAnswer(question);
    questionnaire.checkAnswer(question);
    let score = questionnaire.incrementScore(score);
});

function submitAnswers() {
    const total = questionnaire.getCorrectAnswer(questions);
}