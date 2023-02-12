// Create an array of numbers and take input from the user to add numbers to the array

let array=[12,10,4,9,45,97,83]
// let a=prompt ("Enter a number")
// a=number.parseInt(a)
// let un=51;
// array.push(un);
// console.log(array);

//Q.2 Keep adding numbers to the array in above array until 0 is added to the array
//Q3. Filter for number divisible by 3 from the above array

let newarray =array.filter((n)=>{
    return n % 3===0;
})
console.log(newarray);

// Create an array of square of given numbers
array.forEach((element)=>{
    console.log(element * element);
})

// Write a JavaScript program to generate a random number and store it in a variable. The program then takes an input from the user to tell them whether the guess was correct, greater or lesser than the original number.

// 100 - (number of guesses) will be the score of the user.

// The program is expected to terminate once the number is guessed. Number should be between 1-100.



// Step 1: Generate a random number.
// Step 2: Create variable to store number of attempts.
// Step 3: Keep asking for number untill the correct number is guessed.
// Step 4: Once the number is guessed, display the number and score (100-number of attempts)//
