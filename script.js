let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//Random Number Generator Code//

const generateTarget = () => {
    return (Math.floor(Math.random() * 10 ));
}

//Game Parameters//

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDifference = Math.abs(targetGuess - humanGuess);
    const computerDifference = Math.abs(targetGuess - computerGuess);

    if (humanDifference <= computerDifference) {
        return true;
    } else {
        return false;
    }
}

// Game Score keeping//

const updateScore = winner => {
    if (winner === "human") {
        humanScore++;
    } else if (winner === "computer"){
        computerScore++;
    }
}

//Game Advance Round//

const advanceRound = () => currentRoundNumber++;

//Testing Field//
//console.log(compareGuesses());
//console.log(generateTarget());
//console.log(updateScore());
//console.log(advanceRound());