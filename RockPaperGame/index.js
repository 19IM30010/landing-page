let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        userScore++;
        computerScore++;
        return 'It\'s a tie!';
    } else if ((userChoice === 'rock' && computerChoice === 'scissors') ||
               (userChoice === 'paper' && computerChoice === 'rock') ||
               (userChoice === 'scissors' && computerChoice === 'paper')) {
        userScore++;
        return 'You win!';
    } else {
        computerScore++;
        return 'You lose!';
    }
}

function updateScore() {
    document.getElementById('user-score').innerText = userScore;
    document.getElementById('computer-score').innerText = computerScore;
}

function displayResult(message) {
    document.getElementById('result').innerText = message;
}

function makeChoice(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    displayResult(result);
    updateScore();
    if (userScore === 5 || computerScore === 5) {
        setTimeout(()=>{
            alert(`Game Over!\n${userScore === 5 ? 'You' : 'Computer'} won the game!`);
            resetGame();
        },100);
        
    }
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    updateScore();
    displayResult('');
}
