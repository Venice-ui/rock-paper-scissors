function getComputerChoice() {
    let number = Math.random();
    if (number <= 0.333) {
    return "rock";
    } else if (number > 0.333 && number < 0.667) {
        return "paper";
    } else {
        return "scissors";
    }}
function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?").toLowerCase();
 if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice; 
} else {
    return getHumanChoice();
}}


function getChoice() {
    getComputerChoice();
    getHumanChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let count = 0;
    while (count < 5) {
        playRound();
        count++;
    } if (count === 5 && humanScore > computerScore) {
        console.log("Human wins whole game!");
    } else if (count === 5 && computerScore > humanScore) {
        console.log("Computer wins whole game!");
    } else if (count === 5 && humanScore === computerScore) {
        console.log("Game ends in a tie!")
    }
    
    function playRound() {
        getChoice();
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
    if ((humanChoice === "rock" && computerChoice === "scissors") || 
         (humanChoice === "paper" && computerChoice === "rock") || 
         (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log("User wins!");
        humanScore++;
    } else if ((computerChoice === "rock" && humanChoice === "scissors") || 
            (computerChoice === "paper" && humanChoice === "rock") || 
            (computerChoice === "scissors" && humanChoice === "paper")) {
        console.log("Computer wins!");
        computerScore++;
    } else {
        console.log("It's a tie!");
    } 
        console.log( "Human Score:", humanScore);
        console.log("Computer Score:", computerScore);
        
}
    
}