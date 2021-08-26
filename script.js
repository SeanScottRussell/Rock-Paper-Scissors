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
let gamesTied = 0
function game(){
    console.log(playRound(prompt('Rock, paper, scissors?'), computerPlay()));
    if (playerWins){
        gamesWon++;
    } else if (computerWins){
        gamesLost++;
    } else 
        gamesTied++
    console.log(playRound(prompt('Rock, paper, scissors?'), computerPlay()));
    if (playerWins){
        gamesWon++;
    } else if (computerWins){
        gamesLost++;
    } else 
        gamesTied++
    console.log(playRound(prompt('Rock, paper, scissors?'), computerPlay()));
    if (playerWins){
        gamesWon++;
    } else if (computerWins){
        gamesLost++;
    } else 
        gamesTied++
    console.log(playRound(prompt('Rock, paper, scissors?'), computerPlay()));
    if (playerWins){
        gamesWon++;
    } else if (computerWins){
        gamesLost++;
    } else 
        gamesTied++
    console.log(playRound(prompt('Rock, paper, scissors?'), computerPlay()));
    if (playerWins){
        gamesWon++;
    } else if (computerWins){
        gamesLost++;
    } else 
        gamesTied++

    if (gamesWon > gamesLost){
        console.log('You won! Games won =  ' + gamesWon + ', games lost = ' + gamesLost)
    } else if (gamesLost > gamesWon){
        console.log('You lost! Games won = ' + gamesWon + ', games lost = ' + gamesLost)
    } else
        console.log('It\'s a tie! Games won = ' + gamesWon + ', games lost = ' + gamesLost + ', games tied = ' + gamesTied)
}
game()

