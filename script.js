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
    console.log('computer choice:', computerChoice);

    //Human chooses rock logic 
    if (humanSelection == 'rock' && computerChoice == 'scissors') {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        ++humanScore;
    };
    if (humanSelection == 'rock' && computerChoice == 'rock') {
        console.log(`Tie! ${humanChoice} ties ${computerChoice}`);
    };
    if (humanSelection == 'rock' && computerChoice == 'paper') {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        ++computerScore;
    };

    //Human chooses paper logic 
    if (humanSelection == 'paper' && computerChoice == 'rock') {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        ++humanScore;
    };
    if (humanSelection == 'paper' && computerChoice == 'paper') {
        console.log(`Tie! ${humanChoice} ties ${computerChoice}`);
    };
    if (humanSelection == 'paper' && computerChoice == 'scissors') {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        ++computerScore;
    };

    //Human chooses scissors logic 
    if (humanSelection == 'scissors' && computerChoice == 'paper') {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        ++humanScore;
    };
    if (humanSelection == 'scissors' && computerChoice == 'scissors') {
        console.log(`Tie! ${humanChoice} ties ${computerChoice}`);
    };
    if (humanSelection == 'scissors' && computerChoice == 'rock') {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        ++computerScore;
    };

}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

