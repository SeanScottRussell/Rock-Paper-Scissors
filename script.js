//Define computers choice
function computerPlay(){
    const computerChoice = ['Rock', 'Paper', 'Scissors'];
    const computerPlay = computerChoice[Math.floor(Math.random()*computerChoice.length)];
    return computerPlay
}
let playerWins
let computerWins

//play round

function playRound(playerSelection, computerSelection){
    
    //capatilize player selection
    
    function capPlayerSelection(){;
        let lower = playerSelection.toLowerCase();
            return lower.charAt(0).toUpperCase() + lower.slice(1);
        }
    let playerSelectionCap = capPlayerSelection();

    console.log('You chose ' + playerSelectionCap + ' and I chose ' + computerSelection)
    
    //compare choices

    if ((playerSelectionCap == 'Rock') && (computerSelection == 'Rock')){
        playerWins = false;
        computerWins = false;
        return 'It\'s a tie';
    } else if ((playerSelectionCap == 'Rock') && (computerSelection == 'Paper')){
        playerWins = false;
        computerWins = true;
        return 'You lose! Paper beats Rock';
    } else if ((playerSelectionCap == 'Rock') && (computerSelection == 'Scissors')){
        playerWins = true;
        computerWins = false;
        return 'You win! Rock beats Scisors';
    } else if ((playerSelectionCap == 'Paper') && (computerSelection == 'Rock')){
        playerWins = true;
        computerWins = false;
        return 'You win! Paper beats Rock';
    } else if ((playerSelectionCap == 'Paper') && (computerSelection == 'Paper')){
        playerWins = false;
        computerWins = false;
        return 'It\'s a tie';
    } else if ((playerSelectionCap == 'Paper') && (computerSelection == 'Scissors')){
        playerWins = false;
        computerWins = true;
        return 'You lose! Scissors beats Paper';
    } else if ((playerSelectionCap == 'Scissors') && (computerSelection == 'Rock')){
        playerWins = false;
        computerWins = true; 
        return 'You lose! Rock beats Scissors';
    } else if ((playerSelectionCap == 'Scissors') && (computerSelection == 'Paper')){
        playerWins = true; 
        computerWins = false; 
        return 'You win! Scissors beats Paper';
    } else if ((playerSelectionCap == 'Scissors') && (computerSelection == 'Scissors')){
        playerWins = false;
        computerWins = false;
        return 'It\'s a tie!';
    } else
        return 'Try again'

}

let gamesWon = 0
let gamesLost = 0
function game(){
    console.log(playRound(prompt('Rock, paper, scissors?'), computerPlay()));
    if (playerWins){
        gamesWon++;
    } else if (computerWins){
        gamesLost++;
    }
    console.log(playRound(prompt('Rock, paper, scissors?'), computerPlay()));
    if (playerWins){
        gamesWon++;
    } else if (computerWins){
        gamesLost++;
    }
    console.log(playRound(prompt('Rock, paper, scissors?'), computerPlay()));
    if (playerWins){
        gamesWon++;
    } else if (computerWins){
        gamesLost++;
    }
    console.log(playRound(prompt('Rock, paper, scissors?'), computerPlay()));
    if (playerWins){
        gamesWon++;
    } else if (computerWins){
        gamesLost++;
    }
    console.log(playRound(prompt('Rock, paper, scissors?'), computerPlay()));
    if (playerWins){
        gamesWon++;
    } else if (computerWins){
        gamesLost++;
    }

    if (gamesWon > gamesLost){
        console.log('You won! Games won =  ' + gamesWon + ', games = lost ' + gamesLost)
    } else if (gamesLost > gamesWon){
        console.log('You lost! Games won = ' + gamesWon + ', games = lost ' + gamesLost)
    } else
        console.log('It\'s a tie! We both won ' + gamesWon)
}
game()

//const computerChoice = ['Rock', 'Paper', 'Scissors'];
//const computerPlay = computerChoice[Math.floor(Math.random()*computerChoice.length)];
//let computerSelection = computerPlay;
////Player chooses rock/paper/scissors
//const playerSelection = prompt('Rock, Paper, Scissors?')
////Capatilize player selection
//function capPlayerSelection(string){;
//   let lower = playerSelection.toLowerCase();
//        return lower.charAt(0).toUpperCase() + lower.slice(1);
//}
//let playerSelectionClean = capPlayerSelection();
//
////function to make sure player selects rock/paper/scissors
//
////Define win/lose/tie
//let tie = 'It\'s a tie';
//let lose = 'You lose! ' + computerSelection + ' beats ' + playerSelectionClean + '.';
//let win = 'You win! ' + playerSelectionClean + ' beats ' + computerSelection + '.';
//
////compare computerSelection to playerSelection and determine who is winner
//    
//function compare(){
//    if ((playerSelectionClean == 'Rock') && (computerSelection == 'Rock')){
//        return tie;
//    } else if ((playerSelectionClean == 'Rock') && (computerSelection == 'Paper')){
//        return lose;
//    } else if ((playerSelectionClean == 'Rock') && (computerSelection == 'Scissors')){
//        return win;
//    } else if ((playerSelectionClean == 'Paper') && (computerSelection == 'Rock')){
//        return win;
//    } else if ((playerSelectionClean == 'Paper') && (computerSelection == 'Paper')){
//        return tie;
//    } else if ((playerSelectionClean == 'Paper') && (computerSelection == 'Scissors')){
//        return lose;
//    } else if ((playerSelectionClean == 'Scissors') && (computerSelection == 'Rock')){
//        return lose;
//    }  else if ((playerSelectionClean == 'Scissors') && (computerSelection == 'Paper')){
//        return win;
//    } else ((playerSelectionClean == 'Scissors') && (computerSelection == 'Scissors'))
//        return tie;
//} 
//
////Play game 5 round game and return winner/loser
////function game(){
////    playerSelection
////}
////Play game 5 times
////Keep track of games
////Return winner/loser after 5 games are played
//
//console.log(compare())