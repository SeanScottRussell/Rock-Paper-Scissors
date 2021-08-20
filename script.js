//Computer chooses rock/paper/scissors
const computerChoice = ['Rock', 'Paper', 'Scissors'];
const computerPlay = computerChoice[Math.floor(Math.random()*computerChoice.length)];
let computerSelection = computerPlay;
let playerSelection = 'Scissors'
//Capatilize player selection
function capPlayerSelection(playerSelection){;
   let lower = playerSelection.toLowerCase();
        return
}

//function capitalize(string){
   // let stringLower = string.toLowerCase();
   // return stringLower.charAt(0).toUpperCase() + stringLower.slice(1);
  //}

console.log(capPlayerSelection())
//Define win/lose/tie
let tie = 'It\'s a tie'
let lose = 'You lose! ' + computerSelection + ' beats ' + playerSelection + '.'
let win = 'You win! ' + playerSelection + ' beats ' + computerSelection + '.'

console.log(computerSelection)
//compare computerSelection to playerSelection and determine who is winner
//function compare(){
    
function compare(){
    if ((playerSelection == 'Rock') && (computerSelection == 'Rock')){
        return tie;
    } else if ((playerSelection == 'Rock') && (computerSelection == 'Paper')){
        return lose;
    } else if ((playerSelection == 'Rock') && (computerSelection == 'Scissors')){
        return win;
    } else if ((playerSelection == 'Paper') && (computerSelection == 'Rock')){
        return win;
    } else if ((playerSelection == 'Paper') && (computerSelection == 'Paper')){
        return tie;
    } else if ((playerSelection == 'Paper') && (computerSelection == 'Scissors')){
        return lose;
    } else if ((playerSelection == 'Scissors') && (computerSelection == 'Rock')){
        return lose;
    }  else if ((playerSelection == 'Scissors') && (computerSelection == 'Paper')){
        return win;
    } else if ((playerSelection == 'Scissors') && (computerSelection == 'Scissors')){
        return tie;
    } else {
        return 'You do know how to play this game, yeah?'
    }
//need to put else statement for something that isn't rock/paper/scissors
} 


console.log(compare())

//determine who is winner
//return winner/loser