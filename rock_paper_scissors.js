/**
 * The Odin Project Foundation Training - Rock Paper Scissors
 */

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

function getHumanChoice() {
    const userInput = prompt("Enter your move: [Rock, Paper, Scissors]");

    if (userInput === null || userInput.trim() === '') {
        return null;
    }

    return userInput.trim().toLocaleLowerCase();
}

// const res = playRound(humanSelection, computerSelection);

function playGame() {
    let humaScore = 0;
    let computerScore = 0;
    let result = [];

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
             return {
                winner: 'draw',
                moves: {humanChoice, computerChoice},
                score: {humaScore, computerScore},
                message: `Draw! You picked: ${humanChoice} and Computer picked: ${computerChoice}`
             };
        }

        if (rules[humanChoice] === computerChoice) {
            humaScore++;

            return {
                winner: 'human',
                moves: {humanChoice, computerChoice},
                score: {humaScore, computerScore},
                message: `You win! ${humanChoice} beats ${computerChoice}`
            };
        } else {
            computerScore++;

            return {
                winner: 'computer',
                moves: {humanChoice, computerChoice},
                score: {humaScore, computerScore},
                message: `You lose! ${computerChoice} beats ${humanChoice}`
            };
        }
    }

    // 5 Rounds
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const round = playRound(humanSelection, computerSelection);

        result.push(round);
    }

    return result;

}

console.log(playGame());