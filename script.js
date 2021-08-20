//Computer chooses rock/paper/scissors
const computerChoice = ['Rock', 'Paper', 'Scissors'];
const computerPlay = computerChoice[Math.floor(Math.random()*computerChoice.length)];
let computerSelection = computerPlay;
//Player chooses rock/paper/scissors
const playerSelection = prompt('Rock, Paper, Scissors?')
//Capatilize player selection
function capPlayerSelection(string){;
   let lower = playerSelection.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
}
let playerSelectionClean = capPlayerSelection();

//function to make sure player selects rock/paper/scissors

//Define win/lose/tie
let tie = 'It\'s a tie';
let lose = 'You lose! ' + computerSelection + ' beats ' + playerSelectionClean + '.';
let win = 'You win! ' + playerSelectionClean + ' beats ' + computerSelection + '.';

//compare computerSelection to playerSelection and determine who is winner
    
function compare(){
    if ((playerSelectionClean == 'Rock') && (computerSelection == 'Rock')){
        return tie;
    } else if ((playerSelectionClean == 'Rock') && (computerSelection == 'Paper')){
        return lose;
    } else if ((playerSelectionClean == 'Rock') && (computerSelection == 'Scissors')){
        return win;
    } else if ((playerSelectionClean == 'Paper') && (computerSelection == 'Rock')){
        return win;
    } else if ((playerSelectionClean == 'Paper') && (computerSelection == 'Paper')){
        return tie;
    } else if ((playerSelectionClean == 'Paper') && (computerSelection == 'Scissors')){
        return lose;
    } else if ((playerSelectionClean == 'Scissors') && (computerSelection == 'Rock')){
        return lose;
    }  else if ((playerSelectionClean == 'Scissors') && (computerSelection == 'Paper')){
        return win;
    } else ((playerSelectionClean == 'Scissors') && (computerSelection == 'Scissors'))
        return tie;
} 

//Play game 5 round game and return winner/loser
//function game(){
//    playerSelection
//}
//Play game 5 times
//Keep track of games
//Return winner/loser after 5 games are played

console.log(compare())