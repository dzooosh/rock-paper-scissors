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
    // GAME RULES!!!
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

function game(){
    let player = 0, comp = 0, draw = 0;

    for (let i = 0; i < 5; i++) {
        console.log(`This is game ${i+1}`);
        let playerSelection;
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        let text = playRound(playerSelection, computerSelection);
        if (text.includes("Win")){
            player++;
        }else if (text.includes("Lose")){
            comp++;
        }else if(text.includes("draw")){
            draw++;
        }

        }
    console.log("GAME ENDED!!!");
    console.log("Total Score");
    console.log(`Player: ${player} Draw: ${draw} AI: ${comp}`);
    if (player > comp){
        console.log("   YOU WON!!! :)   ")
    }else if (player < comp){
        console.log("   YOU LOSE :(     ")
    }else if (player == comp){
        console.log("   IT'S A TIE!!! :|    ")
    }
}

function decide(playerCount, compCount){
    if (playerCount == 5 && compCount < 5){
        score.textContent = `Player: ${playerCount} Computer: ${compCount}`;
        decision.textContent = "Congratulations you won!!!";
        // board.forEach((ch) => board.removeChild(ch));
        content.appendChild(decision);   
    }
    else if (compCount == 5 && playerCount < 5){
        score.textContent = `Player: ${playerCount} Computer: ${compCount}`;
        decision.textContent = "Try again Next Time. You LOSE!!!";
        // board.forEach((ch) => board.removeChild(ch));
        content.appendChild(decision);
    }
    else{
        content.removeChild(decision);
    }

}
// DOM MANIPULATION

let playerCount = 0, compCount = 0;
const score = document.createElement('div');
const decision = document.createElement('h1');
const board = document.querySelector('.board');
const content = document.querySelector('.content');
const player = document.createElement('h2');
const comp = document.createElement('h2');
player.textContent = 'You play: ';
comp.textContent = 'Computer plays: ';
board.appendChild(player);
board.appendChild(comp);
board.appendChild(score);


const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach((button) => {
    
    button.addEventListener('click', () => {
        // button.style.color = 'black';
        score.textContent = `Player: ${playerCount} Computer: ${compCount}`;
        while (playerCount <= 5 || compCount <= 5){
            playerSelection = button.id;
            computerSelection = computerPlay();
            player.textContent = `You play: ${playerSelection}`;
            comp.textContent = `Computer plays: ${computerSelection}`;
            console.log(playRound(playerSelection, computerSelection));
    
            let text = playRound(playerSelection, computerSelection);
            if (text.includes("Win")){
                playerCount++;
            }else if (text.includes("Lose")){
                compCount++;
            }else{
                playerCount += 0;
                compCount += 0;
            }
            console.log(playerCount)
            console.log(compCount)
            break;
        };
        decide(playerCount, compCount);
        compCount = playerCount = 0;
        
        
    })
});

// if ai or player is not equal to 5
//     display the choices or gameplay
//     display the scores and update 
//     append them to the parent div
// else
//     remove the choices and scores
//     add the bold text You win or lose