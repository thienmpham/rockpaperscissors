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

    // Add event listener to the buttons 
    // also call playRound() with correct humanChoice everytime 
    // button is clicked 

    document.querySelector('#rock').addEventListener('click', function () {
        playRound('rock', getComputerChoice());
    });
    document.querySelector('#paper').addEventListener('click', function () {
        playRound('paper', getComputerChoice());
    });
    document.querySelector('#scissors').addEventListener('click', function () {
        playRound('scissors', getComputerChoice());
    });

};


getHumanChoice();

function playRound(humanChoice, computerChoice) {
    console.log('human choice:', humanChoice);
    console.log('computer choice:', computerChoice);

    if (computerScore >= 5 || humanScore >= 5) {
        return;
    }
    //Human chooses rock logic 
    if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        ++humanScore;
        document.querySelector('#h-score').textContent = humanScore;
    }
    if (humanChoice == 'rock' && computerChoice == 'rock') {
        console.log(`Tie! ${humanChoice} ties ${computerChoice}`);
    };
    if (humanChoice == 'rock' && computerChoice == 'paper') {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        ++computerScore;
        document.querySelector('#c-score').textContent = computerScore;
    };

    //Human chooses paper logic 
    if (humanChoice == 'paper' && computerChoice == 'rock') {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        ++humanScore;
        document.querySelector('#h-score').textContent = humanScore;
    };
    if (humanChoice == 'paper' && computerChoice == 'paper') {
        console.log(`Tie! ${humanChoice} ties ${computerChoice}`);
    };
    if (humanChoice == 'paper' && computerChoice == 'scissors') {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        ++computerScore;
        document.querySelector('#c-score').textContent = computerScore;
    };

    //Human chooses scissors logic 
    if (humanChoice == 'scissors' && computerChoice == 'paper') {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        ++humanScore;
        document.querySelector('#h-score').textContent = humanScore;
    };
    if (humanChoice == 'scissors' && computerChoice == 'scissors') {
        console.log(`Tie! ${humanChoice} ties ${computerChoice}`);
    };
    if (humanChoice == 'scissors' && computerChoice == 'rock') {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        ++computerScore;
        document.querySelector('#c-score').textContent = computerScore;
    };

    if (humanScore == 5) {
        document.querySelector('#h-score').textContent = 'You Win!';

    }
    else if (computerScore == 5) {
        document.querySelector('#c-score').textContent = 'Robots Win!';

    }


}


// function playGame() {
//     for (let i = 0; i <= 5; i++) {
//         playRound(getHumanChoice(), getComputerChoice());
//         console.log(`Human: ${humanScore}`);
//         console.log(`Computer: ${computerScore}`);

//         if (i == 5) {
//             console.log(`Final Score: \n Human: ${humanScore} points \n Computer: ${computerScore} points`);
//             if (humanScore > computerScore) {
//                 console.log('Humanity Wins!');
//             } else if (humanScore < computerScore) {
//                 console.log('Robots win!');
//             } else {
//                 console.log('Its a Tie! Everybody wins!')
//             }
//         }
//     }
// }

// playGame();

