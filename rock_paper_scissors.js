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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // Inner function to play a round
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
             return {
                winner: 'draw',
                message: `Draw! You picked: ${humanChoice} and Computer picked: ${computerChoice}`
             };
        } else if (rules[humanChoice] === computerChoice) {
            return {
                winner: 'human',
                message: `You win! ${humanChoice} beats ${computerChoice}`
            };
        } else {
            return {
                winner: 'computer',
                message: `You lose! ${computerChoice} beats ${humanChoice}`
            };
        }
    }

    // Do 5 Rounds
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const round = playRound(humanSelection, computerSelection);

        // Log winner in each round
        console.log(round.message);

        if (round.winner === 'human') humanScore++;
        if (round.winner === 'computer') computerScore++;
    }   
    
    // Log the entire game winner (result)
    if (humanScore === computerScore) {
        console.log('DRAW');
    } else if (humanScore > computerScore) {
        console.log('You Win!')
    } else {
        console.log('You lose!');
    }
}

playGame();