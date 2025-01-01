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
    }
    else if (choice.toLowerCase() == 'paper') {
        return 'paper';
    }
    else if (choice.toLowerCase() == 'scissors') {
        return 'scissors';
    } else {
        console.log('Not a valid choice.');
        return 'undefined';
    };

}


function playRound(humanChoice, computerChoice) {
    console.log('human choice:', humanChoice);
    console.log('computer choice:', computerChoice);

    //Human chooses rock logic 
    if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        ++humanScore;
    }
    if (humanChoice == 'rock' && computerChoice == 'rock') {
        console.log(`Tie! ${humanChoice} ties ${computerChoice}`);
    };
    if (humanChoice == 'rock' && computerChoice == 'paper') {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        ++computerScore;
    };

    //Human chooses paper logic 
    if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        ++humanScore;
    };
    if (humanChoice == 'paper' && computerChoice == 'paper') {
        console.log(`Tie! ${humanChoice} ties ${computerChoice}`);
    };
    if (humanChoice == 'paper' && computerChoice == 'scissors') {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        ++computerScore;
    };

    //Human chooses scissors logic 
    if (humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        ++humanScore;
    };
    if (humanChoice == 'scissors' && computerChoice == 'scissors') {
        console.log(`Tie! ${humanChoice} ties ${computerChoice}`);
    };
    if (humanChoice == 'scissors' && computerChoice == 'rock') {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        ++computerScore;
    };

    if (humanChoice == 'undefined') {
        console.log('undefined');
        return;
    }



}


function playGame() {
    for (let i = 0; i <= 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Human: ${humanScore}`);
        console.log(`Computer: ${computerScore}`);

        if (i == 5) {
            console.log(`Final Score: \n Human: ${humanScore} points \n Computer: ${computerScore} points`);
            if (humanScore > computerScore) {
                console.log('Humanity Wins!');
            } else if (humanScore < computerScore) {
                console.log('Robots win!');
            } else {
                console.log('Its a Tie! Everybody wins!')
            }
        }
    }
}

playGame();