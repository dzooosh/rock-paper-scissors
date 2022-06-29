function computerPlay(){
    let random;
    choice = ["rock", "paper", "scissors"];
    random = Math.floor(Math.random() * 3);
    console.log(choice(random));
}
computerPlay();