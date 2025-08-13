/**
 * The Odin Project Foundation Training - Rock Paper Scissors
 */

let humaScore = 0;
let computerScore = 0;

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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) return 'draw';

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

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// const res = playRound(humanSelection, computerSelection);

function playGame() {
    // call playRound to play 5 rounds
    // keep track of the scores and declares winner at the end

}