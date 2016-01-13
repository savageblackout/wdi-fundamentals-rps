function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    var answer = prompt();
   return answer;
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {

return move || getInput();

}
function getComputerMove(move) {
    
    return move || randomPlay();
}

function getWinner(playerMove, computerMove) {
    if (playerMove === computerMove) {
        return "tie";
    }
    else if (playerMove === "rock" && computerMove === "scissors") {
        return "player";
    }
    else if (playerMove === "rock" && computerMove === "paper") {
        return "computer";
    }
    else if (playerMove === "paper" && computerMove === "scissors") {
        return "computer";
    }
    else if (playerMove === "paper" && computerMove === "rock") {
        return "player";
    }
    else if (playerMove === "scissors" && computerMove === "paper") {
        return "player";
    }
    else if (playerMove === "scissors" && computerMove === "rock") {
        return "computer";
    }
    // var = winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        console.log(playerMove);
        console.log(computerMove);
        var winner = getWinner(playerMove, computerMove);
        if (winner === "player") {
            playerWins += 1;
        } else if (winner === "computer") {
            computerWins += 1;
        } else if (winner === "tie") {
            console.log ("tie");
        }
        console.log(playerWins + " vs." + computerWins);
    }
    return [playerWins, computerWins];
}

