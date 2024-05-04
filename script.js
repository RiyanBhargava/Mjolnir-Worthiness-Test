const quizForm = document.getElementById('quizForm');
const resultDiv = document.getElementById('result');
const scoresList = document.getElementById('scores');

// Define the correct answers for each question
const correctAnswers = ['b', 'c', 'c', 'c', 'b'];

// Event listener for form submission
quizForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let score = 0;

    // Iterate through each question
    for (let i = 1; i <= 5; i++) {
        const selectedAnswer = document.querySelector(`input[name=q${i}]:checked`);
        if (selectedAnswer) {
            if (selectedAnswer.value === correctAnswers[i - 1]) {
                score++;
            }
        }
    }

    displayResult(score);
    updateLeaderboard(score);
});

// Function to display result
function displayResult(score) {
    let message = '';
    if (score >= 4) {
        message = 'Congratulations! You are worthy to lift Mjolnir.';
    } else {
        message = 'Sorry, you are not worthy to lift Mjolnir.';
    }
    resultDiv.innerHTML = `<p>Your score: ${score} / 5</p><p>${message}</p>`;
}

// Leaderboard
const leaderboard = [];

function updateLeaderboard(score) {
    leaderboard.push(score);
    leaderboard.sort((a, b) => b - a);

    const leaderboardSlice = leaderboard.slice(0, 5);
    scoresList.innerHTML = leaderboardSlice.map((score, index) => `<li>${index + 1}. ${score}/5</li>`).join('');
}


