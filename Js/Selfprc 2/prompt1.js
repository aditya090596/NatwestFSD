const prompt = require("prompt-sync")();
//Write a JavaScript program to generate a random number and store it in a variable. The program then takes an input from the user to tell them whether the guess was correct, greater or lesser than the original number.

// 100 - (number of guesses) will be the score of the user.

// The program is expected to terminate once the number is guessed. Number should be between 1-100.



// //Step 1: Generate a random number.
// Step 2: Create variable to store number of attempts.
// Step 3: Keep asking for number untill the correct number is guessed.
// Step 4: Once the number is guessed, display the number and score (100-number of attempts)//

// let x = Math.floor((Math.random() * 100) + 1);
// let attempts = 0;
// let i = 0;
// while (i != x) {
//     i = prompt("Enter a number")
//     if (i > x) {
//         console.log("Your guess is greater than the generated number");
//     }
//     else if (i < x) {
//         console.log("Your guess is lesser than the generated number");
//     }
//     else {
//         console.log("Matched");

//     }
//     attempts++
// }
// console.log(x);
// console.log("Your score is - ",100 - attempts);
function myFunction() {
    alert("Hello\nHow are you?");
  }