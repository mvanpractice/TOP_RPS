/**
 * The Odin Project Foundation Training - Rock Paper Scissors
 */

const totalRound = 5;
let currentRound = 0;

const $ = (selector) => {
    const element = document.querySelector(selector);

    return element;
};

const container = $('#container');

const resultDisplay = {
    currentRoundDisplay: $('#current-round'),
    currentWinnerDisplay: $('#round-winner'),
    yourMoveDisplay: $('#your-move'),
    computerMoveDisplay: $('#computer-move')
};

const moves = ['rock', 'paper', 'scissors'];

const rules = {
    rock: 'scissors', //rock beats scissors
    paper: 'rock', // paper beats rock
    scissors: 'paper' // scissors beats paper
};

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    return moves[randomNumber];
}

function getHumanChoice(selectedMove) {
    if (selectedMove) {
        return selectedMove.toLowerCase();
    }
}

function playGame(humanChoice, computerChoice) {
    let humanScore = 0;
    let computerScore = 0;

    function getRoundWinner() {
        if (humanChoice === computerChoice) return 'draw';

        if (rules[humanChoice] === computerChoice) return 'human';

        return 'computer';
    }

    function getScore() {
        const roundWinner = getRoundWinner();

        if (roundWinner === 'human') {
            humanScore++;
        } else if (roundWinner === 'computer') {
            computerScore++;
        }

        return {
            winner: roundWinner,
            humanChoice,
            computerChoice
        }
    }
    
    if (!getRoundWinner) return;

    const currentScore = getScore();
    currentRound++;

    return {
        currentRound,
        score: currentScore
    }
}

function displayResult(round) {
    let roundWinner = round.score.winner;

    const humanChoice = round.score.humanChoice;
    const currentHumanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);

    const computerChoice = round.score.computerChoice;
    const currentComputerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

    if (roundWinner === 'draw') {
        roundWinner = `It's a Draw!`;
    } else if (roundWinner === 'human') {
        roundWinner = `You Win! ${currentHumanChoice} beats ${currentComputerChoice}`;
    } else {
        roundWinner = `You Lose! ${currentComputerChoice} beats ${currentHumanChoice}`;
    }

    resultDisplay.currentRoundDisplay.textContent = round.currentRound;
    resultDisplay.yourMoveDisplay.textContent = currentHumanChoice;
    resultDisplay.computerMoveDisplay.textContent = currentComputerChoice;
    resultDisplay.currentWinnerDisplay.textContent = roundWinner;
}

const gameRecord = [];
// Event Listener
container.addEventListener('click', event => {
    event.stopPropagation();

    const moveBtnId = event.target.id;

    if (event.target.closest('button') && moves.includes(moveBtnId)) {
        const humanSelection = getHumanChoice(moveBtnId);
        const computerSelection = getComputerChoice();

        const round = playGame(humanSelection, computerSelection);
        gameRecord.push(round);

        if (round.currentRound >= totalRound) {
            displayResult(round);

            // Game winner
            displayGameOver(gameRecord);

            return;
        }

        displayResult(round);
    }
});

function displayGameOver(gameRecord) {
    const humanWin = gameRecord.filter(record => {
        return record.score.winner === 'human';
    });

    const computerWin = gameRecord.filter(record => {
        return record.score.winner === 'computer'
    });

    const winnerDisplay = $('.result');
    const p = document.createElement('p');

    winnerDisplay.appendChild(p);

    if (humanWin === computerWin) {
        p.textContent = "It's a Draw!";
    } else if (humanWin > computerWin) {
        p.textContent = 'You won the game!';
    } else {
        p.textContent = 'You lost! Computer won the game!';
    }
}