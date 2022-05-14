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

            this.correctAnswers[question.className] = arr;
        });
        console.log(Object.keys(this.correctAnswers).length);
        console.log(this.correctAnswers);
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

            this.inputAnswers[question.className] = arr;
        });
        console.log(Object.keys(this.inputAnswers).length);
        console.log(this.inputAnswers);
}

    calculateScore()
    {
        this.questions.forEach( question => {
            if (this.inputAnswers[question.className].length === this.correctAnswers[question.className].length) {
                this.score++;
            }
        });
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

    let scoreContent = document.querySelector('.score-board');
    scoreContent.style.display = 'flex';
    let score = document.querySelector('.score');
    score.innerHTML = results.score;
});

