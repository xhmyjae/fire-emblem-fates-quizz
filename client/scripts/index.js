class questionnaire
{
    constructor(questions, correctAnswers, inputAnswers, score) {
        this.questions = questions;
        this.correctAnswers = correctAnswers;
        this.inputAnswers = inputAnswers;
        this.score = score;
    }

    getCorrectAnswer()
    {
        this.questions.forEach( question => {
            let inputs = question.querySelectorAll('input');
            let arr = [];

            inputs.forEach( input => {
                if (input.value === 'correct') {
                    arr.push(input);
                }
            });

            this.correctAnswers[question] = arr;
        });
        console.log(this.correctAnswers.length);
    }

    checkAnswer()
    {
        this.questions.forEach( question => {
            let inputs = question.querySelectorAll('input');
            let arr = [];

            inputs.forEach( input => {
                if (input.value === 'correct' && input.checked) {
                    arr.push(input);
                    console.log(input)
                }
            });

            this.inputAnswers[question] = arr;
        });
}

    calculateScore()
    {
        for (let i = 0; i < this.correctAnswers.length; i++) {
            if (this.inputAnswers[i].length === this.correctAnswers[i].length) {
                this.score++;
            }
        }
    }
}

let quizz = document.getElementById('quizz');

quizz.addEventListener('submit', e => {
    var q1 = document.forms['quizz']['answer1Q1'].value;

    e.preventDefault();
    let questions = document.querySelectorAll('.questions');

    let results = new questionnaire(questions, {}, {}, 0);
    results.getCorrectAnswer();
    results.checkAnswer();
    results.calculateScore();

    let score = document.querySelector('.score-board');
    score.innerHTML = results.score;
});

