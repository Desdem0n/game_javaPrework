let userScore = 0;
let computerScore = 0;
let userChoice = 0;
let computerChoice = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function win(user, computer) {
    userScore++; 
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = " YOU WIN!!!!:) ";
    console.log(user);
    console.log(computer);
}

function lose() {
    computerScore++;
   // console.log("LOST!!!");
   userScore_span.innerHTML = userScore;
   computerScore_span.innerHTML = computerScore;
   result_p.innerHTML = " YOU LOST!!! ;p ";

}

function draw() {
    userScore_span.innerHTML = userScore;
   computerScore_span.innerHTML = computerScore;
   result_p.innerHTML = " DRAW!!! ;p ";

}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rp":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            //console.log("USER WINS!!!");
            break;
        case "pr":
        case "sp":
        case "sr":
            lose(userChoice, computerChoice);
            //console.log("USER LOSES");
            break;
        case "pp":
        case "ss":
        case "rr":
            draw();
            //console.log("IT'S A DRAW");
            break;

    }
    
}
function main() {
rock_div.addEventListener('click', function() {
    game("r");
})

paper_div.addEventListener('click', function() {
    game("p");
})

scissors_div.addEventListener('click', function() {
    game("s");
})
}

main();

