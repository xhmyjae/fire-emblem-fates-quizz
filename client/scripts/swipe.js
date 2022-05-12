
let questions = document.querySelectorAll('.questions');
let questionsArray = Array.from(questions);
let next = document.querySelector('.next-button');
let previous = document.querySelector('.previous-button');

questions[0].classList.toggle('hide');
previous.style.visibility = 'hidden';

next.addEventListener('click', e => {
    previous.style.visibility = 'visible';

    let currentQuestion = document.querySelector('.questions:not(.hide)');

    let currentQuestionIndex = questionsArray.indexOf(currentQuestion);
    if (currentQuestionIndex === questionsArray.length - 2) {
        next.style.visibility = 'hidden';
    }
    questions[currentQuestionIndex].classList.toggle('hide');
    questions[currentQuestionIndex + 1].classList.toggle('hide');
});

previous.addEventListener('click', e => {
    next.style.visibility = 'visible';

    let currentQuestion = document.querySelector('.questions:not(.hide)');

    let currentQuestionIndex = questionsArray.indexOf(currentQuestion);
    if (currentQuestionIndex === 1) {
        previous.style.visibility = 'hidden';
    }
    questions[currentQuestionIndex].classList.toggle('hide');
    questions[currentQuestionIndex - 1].classList.toggle('hide');
});