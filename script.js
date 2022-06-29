// computerPlay is a random play by computer 
function computerPlay(){
    let random;

    // list of choice available
    const choice = ["rock", "paper", "scissors"];
    
    // random number from 0 to 2
    random = Math.floor(Math.random() * 3);
    
    // display output on console. 
    console.log("computer plays: ", choice[random]);
    //Output is from indexing of list ex. num[0] or list[3]
    return (choice[random]);
}

// player input evaluation
function playerInput(){
    // make all input case insensitive
    let input = prompt("Choose one: Input Rock, Paper or Scissors", "rock").toLowerCase();
    
    // check if input is among the acceptables
    if (input == "rock" || input == "paper" || input == "scissors"){
        // prints output on console
        console.log("You choose: ", input);

        // returns value
        return input;
    }
    // alerts once input is not same correct
    alert("You did not type any correctly");
    // recursively calls function till input is correct or process is cancelled.
    playerInput();
    }

    
function playRound(p1, AI) {
    // GAME RULESSS!!!
    switch (true){
        case (p1 == 'rock' && AI == 'paper'):
            return ("You Lose! Paper beats Rock");
            break;
        case (p1 == 'paper' && AI == 'rock'):
            return ("You Win! Paper beats Rock");
            break;
        case (p1 == 'scissors' && AI == 'paper'):
            return ("You Win! Scissors beat paper");
            break;
        case (p1 == 'paper' && AI == 'scissors'):
            return ("You Lose! Scissors beat paper");
            break;
        case (p1 == 'rock' && AI == 'scissors'):
            return ("You Win! Rock beat Scissors");
            break;
        case (p1 == 'scissors' && AI == 'rock'):
            return ("You Lose! Rock beat Scissors");
            break;
        default:
            return ("This is a draw");
    }
}
    
const playerSelection = playerInput();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

