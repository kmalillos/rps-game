var computerChoices = ["r", "p", "s"]

document.onkeyup = function(event) {
    // console.log(event.key);

    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
    
    console.log("User Guess: ", userGuess);
    console.log("Computer Guess: ", computerGuess);

    if (userGuess === "r" || userGuess === "p" || userGuess === "s") {
        console.log("Valid guess!")
    } else {
        alert("Please press 'r', 'p', or 's' to play the game.")
    }

}