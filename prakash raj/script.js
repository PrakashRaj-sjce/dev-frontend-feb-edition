document.querySelectorAll('.bar').forEach((bar) => {
    const randomHeight = Math.random() * 100; 
    setTimeout(() => {
        bar.style.height = randomHeight + '%';
    }, 500);
});


let currentQuestion = 0;
const questions = [
    "Do you feel loved when someone gives you compliments?",
    "Do you appreciate thoughtful gifts?",
    "Is quality time the most important to you?"
];

function startQuiz() {
    const questionDisplay = document.getElementById('question-display');
    const optionsContainer = document.getElementById('options-container');

    if (currentQuestion < questions.length) {
        questionDisplay.textContent = questions[currentQuestion];
    } else {
        questionDisplay.textContent = "Quiz complete!";
        optionsContainer.innerHTML = ''; 
        return;
    }

    document.querySelectorAll('.option').forEach((btn, index) => {
        btn.textContent = "Answer " + (index + 1);
        btn.addEventListener('click', () => {
            currentQuestion++;
            startQuiz();
        });
    });
}

document.getElementById('start-quiz').addEventListener('click', startQuiz);