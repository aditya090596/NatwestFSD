function calculate()
{
    var n1=document.getElementById("num1").value;
    const prompt = require("prompt-sync")();
let x = Math.floor((Math.random() * 100) + 1);
let attempts = 0;
let i = 0;
while (i != x) {
    i = prompt("Enter a number")
    if (i > x) {
        console.log("Your guess is greater than the generated number");
    }
    else if (i < x) {
        console.log("Your guess is lesser than the generated number");
    }
    else {
        console.log("Matched");

    }
    attempts++
}
console.log(x);
console.log("Your score is - ",100 - attempts);
}