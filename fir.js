// JavaScript code for quiz functionality
const questions = [
    {
        question: "What is the capital of France?",
        
        choices: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: "Paris",
    },
    // Add more questions here
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const submitButton = document.getElementById("submit-button");
const nextButton = document.getElementById("next-button");

function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = `Question ${currentQuestion + 1}: ${question.question}`;

    choicesElement.innerHTML = "";
    question.choices.forEach((choice) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="radio" name="answer" value="${choice}">${choice}`;
        choicesElement.appendChild(li);
    });
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        resultElement.textContent = "Please select an answer.";
        return;
    }

    if (selectedAnswer.value === questions[currentQuestion].correctAnswer) {
        score++;
    }

    resultElement.textContent = `Correct! The answer is ${questions[currentQuestion].correctAnswer}`;
    submitButton.style.display = "none";
    nextButton.style.display = "block";
    scoreElement.textContent = `Score: ${score}`;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
        resultElement.textContent = "";
        submitButton.style.display = "block";
        nextButton.style.display = "none";
    } else {
        // Quiz completed, display final score
        questionElement.textContent = "Quiz completed!";
        choicesElement.innerHTML = "";
        resultElement.textContent = `Your final score is: ${score} out of ${questions.length}`;
        submitButton.style.display = "none";
        nextButton.style.display = "none";
    }
}

loadQuestion();

submitButton.addEventListener("click", checkAnswer);
nextButton.addEventListener("click", nextQuestion);