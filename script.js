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

    
function playRound(x, y) {
    switch (true){
        case (x == 'rock' && y == 'paper'):
            return ("You Lose! Paper beats Rock");
            break;
        case (x == 'paper' && y == 'rock'):
            return ("You Win! Paper beats Rock");
            break;
        case (x == 'scissors' && y == 'paper'):
            return ("You Win! Scissors beat paper");
            break;
        case (x == 'paper' && y == 'scissors'):
            return ("You Lose! Scissors beat paper");
            break;
        case (x == 'rock' && y == 'scissors'):
            return ("You Win! Rock beat Scissors");
            break;
        case (x == 'scissors' && y == 'rock'):
            return ("You Lose! Rock beat Scissors");
            break;
        default:
            return ("This is a draw");
    }
}
    
const playerSelection = playerInput();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

