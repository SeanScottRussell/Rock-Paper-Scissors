
let playerWins
let computerWins

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerScoreDisplay = document.getElementById("playerScore");
const compScoreDisplay = document.getElementById("compScore");
const tiedDisplay = document.getElementById("tied");
const results = document.getElementById("results");
const gameOverMessage = document.getElementById("gameOver");
let playerScore = 0;
let compScore = 0;
let ties = 0

rock.onclick = function (){
    game('Rock');
    if (playerScore == 5 || (compScore == 5 || ties == 5)){
        gameOverMessage.innerText = gameOver();
        reset();
    } else {
        gameOverMessage.innerText = "";
    }
}

paper.onclick = function (){
    game('Paper');
    if (playerScore == 5 || (compScore == 5 || ties == 5)){
        gameOverMessage.innerText = gameOver();
        reset();
    } else {
        gameOverMessage.innerText = "";
    }
}

scissors.onclick = function (){
    game('Scissors');
    if (playerScore == 5 || (compScore == 5 || ties == 5)){
        gameOverMessage.innerText = gameOver();
        reset();
    } else {
        gameOverMessage.innerText = "";
    }
}

function game(playerSelection){
    computerSelection = computerPlay();
    results.innerText = `Player selected ${playerSelection}
    Computer selected ${computerSelection}
    ${playRound(playerSelection, computerSelection)}`;
    updateScore();
}

function updateScore(){
    playerScoreDisplay.innerText = 'Player wins = ' + playerScore;
    compScoreDisplay.innerText = 'Computer wins = ' + compScore;
    tiedDisplay.innerText = 'Ties = ' + ties;
}

function reset(){
    compScore = 0;
    playerScore = 0;
    ties = 0;
}

function gameOver(){
    if (playerScore == 5){
        return 'Game over! You win!'
    } else if (ties == 5){
        return 'Game over! It\'s a tie!'
    } else {
        return 'Game over! You lose!'
    }
}

//Define computers choice
function computerPlay(){
    const computerChoice = ['Rock', 'Paper', 'Scissors'];
    const computerPlay = computerChoice[Math.floor(Math.random()*computerChoice.length)];
    return computerPlay
}
//play round

function playRound(playerSelection, computerSelection){
    
    //capatilize player selection
    
    function capPlayerSelection(){;
        let lower = playerSelection.toLowerCase();
            return lower.charAt(0).toUpperCase() + lower.slice(1);
        }
    let playerSelectionCap = capPlayerSelection();

    
    //compare choices

    if ((playerSelectionCap == 'Rock') && (computerSelection == 'Rock')){
        ties++;
        return 'It\'s a tie';
    } else if ((playerSelectionCap == 'Rock') && (computerSelection == 'Paper')){
        compScore++;
        return 'You lose! Paper beats Rock';
    } else if ((playerSelectionCap == 'Rock') && (computerSelection == 'Scissors')){
        playerScore++;
        return 'You win! Rock beats Scisors';
    } else if ((playerSelectionCap == 'Paper') && (computerSelection == 'Rock')){
        playerScore++;
        return 'You win! Paper beats Rock';
    } else if ((playerSelectionCap == 'Paper') && (computerSelection == 'Paper')){
        ties++;
        return 'It\'s a tie';
    } else if ((playerSelectionCap == 'Paper') && (computerSelection == 'Scissors')){
        compScore++;
        return 'You lose! Scissors beats Paper';
    } else if ((playerSelectionCap == 'Scissors') && (computerSelection == 'Rock')){
        compScore++;
        return 'You lose! Rock beats Scissors';
    } else if ((playerSelectionCap == 'Scissors') && (computerSelection == 'Paper')){
        playerScore++;
        return 'You win! Scissors beats Paper';
    } else if ((playerSelectionCap == 'Scissors') && (computerSelection == 'Scissors')){
        ties++;
        return 'It\'s a tie!';
    } else
        return 'Try again'

}

// let gamesWon = 0
// let gamesLost = 0
// let gamesTied = 0
// function game(){
//     if (playerWins){
//         gamesWon++;
//     } else if (computerWins){
//         gamesLost++;
//     } else 
//         gamesTied++
//     console.log(playRound(prompt('Rock, paper, scissors?'), computerPlay()));
//     if (playerWins){
//         gamesWon++;
//     } else if (computerWins){
//         gamesLost++;
//     } else 
//         gamesTied++
//     console.log(playRound(prompt('Rock, paper, scissors?'), computerPlay()));
//     if (playerWins){
//         gamesWon++;
//     } else if (computerWins){
//         gamesLost++;
//     } else 
//         gamesTied++
//     console.log(playRound(prompt('Rock, paper, scissors?'), computerPlay()));
//     if (playerWins){
//         gamesWon++;
//     } else if (computerWins){
//         gamesLost++;
//     } else 
//         gamesTied++
//     console.log(playRound(prompt('Rock, paper, scissors?'), computerPlay()));
//     if (playerWins){
//         gamesWon++;
//     } else if (computerWins){
//         gamesLost++;
//     } else 
//         gamesTied++

//     if (gamesWon > gamesLost){
//         console.log('You won! Games won =  ' + gamesWon + ', games lost = ' + gamesLost)
//     } else if (gamesLost > gamesWon){
//         console.log('You lost! Games won = ' + gamesWon + ', games lost = ' + gamesLost)
//     } else
//         console.log('It\'s a tie! Games won = ' + gamesWon + ', games lost = ' + gamesLost + ', games tied = ' + gamesTied)
// }
// game()

