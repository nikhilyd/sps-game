let stone = document.querySelector("#s");
let paper = document.querySelector("#p");
let scissors = document.querySelector("#s2");
let winner = document.querySelector("#winner");
let comscore = document.querySelector("#cmsc");
let yourscore = document.querySelector("#yrsc");
let cat = document.querySelector("#cat");
let cat2 = document.querySelector("#cat2");

const choices = ["stone", "paper", "scissors"];

let computerscore = 0;
let yourscorevalue = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function winnercheck(yourchoice, computerChoice) {
    
    if (yourchoice === computerChoice) {
        
            cat.style.visibility = "hidden";
                cat2.style.visibility = "hidden";
        
        winner.innerHTML = "It's a draw!";
    } else if (yourchoice === "stone" && computerChoice === "paper") {
        cat.style.visibility = "visible";
    cat2.style.visibility = "visible";
        cat.style.backgroundImage = "url('sadanime.gif')";
        cat2.style.backgroundImage = "url('sadanime.gif')";
        winner.innerHTML = "You lost! Paper wins over stone.";
        computerscore++;
    } else if (yourchoice === "paper" && computerChoice === "scissors") {
        cat.style.visibility = "visible";
    cat2.style.visibility = "visible";
        cat.style.backgroundImage = "url('sadanime.gif')";
        cat2.style.backgroundImage = "url('sadanime.gif')";
        winner.innerHTML = "You lost! Scissors win over paper.";
        computerscore++;
    } else if (yourchoice === "scissors" && computerChoice === "stone") {
        cat.style.visibility = "visible";
    cat2.style.visibility = "visible";
        cat.style.backgroundImage = "url('sadanime.gif')";
        cat2.style.backgroundImage = "url('sadanime.gif')";
        winner.innerHTML = "You lost! Stone wins over scissors.";
        computerscore++;
    } else if (yourchoice === "paper" && computerChoice === "stone") {
        cat.style.visibility = "visible";
    cat2.style.visibility = "visible";
        cat.style.backgroundImage = "url('dancingcat.gif')";
        cat2.style.backgroundImage = "url('dancingcat.gif')";
        winner.innerHTML = "You win! Paper wins over stone.";
        yourscorevalue++;
    } else if (yourchoice === "scissors" && computerChoice === "paper") {
        cat.style.visibility = "visible";
    cat2.style.visibility = "visible";
        cat.style.backgroundImage = "url('dancingcat.gif')";
        cat2.style.backgroundImage = "url('dancingcat.gif')";
        winner.innerHTML = "You win! Scissors win over paper.";
        yourscorevalue++;
    } else if (yourchoice === "stone" && computerChoice === "scissors") {
        cat.style.visibility = "visible";
    cat2.style.visibility = "visible";
        cat.style.backgroundImage = "url('dancingcat.gif')";
        cat2.style.backgroundImage = "url('dancingcat.gif')";
        winner.innerHTML = "You win! Stone wins over scissors.";
        yourscorevalue++;
    }

    // cat.style.visibility = "visible";
    // cat2.style.visibility = "visible";

    comscore.innerHTML = `Computer: ${computerscore}`;
    yourscore.innerHTML = `You: ${yourscorevalue}`;
}

stone.addEventListener("click", () => {
    const yourchoice = "stone";
    const computerChoice = getComputerChoice();
    winnercheck(yourchoice, computerChoice);
});

paper.addEventListener("click", () => {
    const yourchoice = "paper";
    const computerChoice = getComputerChoice();
    winnercheck(yourchoice, computerChoice);
});

scissors.addEventListener("click", () => {
    const yourchoice = "scissors";
    const computerChoice = getComputerChoice();
    winnercheck(yourchoice, computerChoice);
});
