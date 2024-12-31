let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);

    if (num == 0) {
        return 'rock';
    } else if (num == 1) {
        return 'paper'
    } else {
        return 'scissors';
    }
}
console.log(getComputerChoice());


function getHumanChoice() {
    let choice = prompt('Rock, paper or scissors?');

    if (choice.toLowerCase() == 'rock') {
        return 'rock';
    } else if (choice.toLowerCase() == 'paper') {
        return 'paper';
    } else if (choice.toLowerCase() == 'scissors') {
        return 'scissors';
    } else {
        console.log('invalid choice, please try again!')
    }

}


function playRound(humanChoice, computerChoice) {
    console.log('human choice:', humanChoice);

    if (humanSelection == 'rock' && computerChoice == 'scissors') {

    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

