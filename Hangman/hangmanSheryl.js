// Create an array of words
let words = [
    "java",
    "developer",
    "software"
];

// Pick a random word
let word = words[Math.floor(Math.random() * words.length)];

// Set up the answer array
let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remainingLetters = word.length;
let guessesAllowed = 10; // Allow 10 guesses

// The game loop
while (remainingLetters > 0) {
    // Show the player their progress
    alert("Your Progress:    " + answerArray.join(" "));
    alert("You have " + remainingLetters + " left.");

    // Get a guess from the player
    let guess = prompt("Guess a letter, or click Cancel to stop playing.");

    if (guess === null) {
        // Exit the game loop
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        // Update the game state with the guess
        guess = guess.toLowerCase();
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                if (answerArray[j] === "_") {
                    answerArray[j] = guess;
                    remainingLetters--;
                } else {
                    alert("You have already guessed letter " + guess);
                    break;
                }
            }
        }
    }
}

// The end of the game loop

// Show the answer and congratulate the player
if (remainingLetters === 0) {
    alert("Your Final Result:    " + answerArray.join(" "));
    alert("Good job! You guessed the word!");
} else if (guess === null) {
    alert("Sorry to see you leave. The answer was " + word);
} else {
    alert("Sorry you ran out of guesses!");
}
