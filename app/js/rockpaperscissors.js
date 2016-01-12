////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
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
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {

return move || getInput();

}

function getComputerMove(move) {
    
    return move || randomPlay();
}

ffunction getWinner(playerMove,computerMove) {
   
    if(playerMove === computerMove){
        return "tie";
        }
        else if(playerMove === "rock"&&computerMove === "scissors"){
            return "player wins";
        }else if(playerMove ==="rock"&&computerMove === "paper"){
            return "computer wins";
        }else if(playerMove ==="paper"&&computerMove === "scissors"){
            return "computer wins"
        }else if(playerMove === "paper"&&computerMove === "rock"){
            return "player wins"
        }else if(plaerMove === "rock"&&computerMove === "paper"){
            return "computer wins"
        }else if(playerMove ==="rock"&&computerMove ==="scissors"){
            return "player wins"
        }
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

