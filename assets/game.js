var gameOptions = ["r", "p", "s"]
var wins = 0;
var losses = 0;
var ties = 0;

document.onkeyup = function(event) {
    // console.log(event.key);

    var userChoice = event.key.toLowerCase();
    var computerChoice = gameOptions[Math.floor(Math.random() * gameOptions.length)]
    
    // console.log("User Choice: ", userChoice);
    // console.log("Computer Choice: ", computerChoice);

    if (userChoice === "r" || userChoice === "p" || userChoice === "s") {
        // console.log("Valid Choice!")

        if (userChoice === "r" && computerChoice === "s" ) {
            wins++;
        } else if (userChoice === "p" && computerChoice === "r" ) {
            wins++;
        } else if (userChoice === "s" && computerChoice === "p") {
            wins++;
        } else if (userChoice === "r" && computerChoice === "p") {
            losses++;
        } else if (userChoice === "p" && computerChoice === "s") {
            losses++;
        } else if (userChoice === "s" && computerChoice === "r") {
            losses++;
        } else {
            ties++;
        };

        
        document.getElementById("userChoice-text").textContent = "User: " + userChoice;
        document.getElementById("computerChoice-text").textContent = "Computer: " + computerChoice;
        document.getElementById("wins-text").textContent = "Wins: " + wins;
        document.getElementById("losses-text").textContent = "Losses: " + losses;
        document.getElementById("ties-text").textContent = "Ties: " + ties;

    } else {
        alert("Please press 'r', 'p', or 's' to play the game.")
    }

}