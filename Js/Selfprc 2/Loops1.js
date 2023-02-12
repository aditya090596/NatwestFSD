// // // for loop: loop a block of code no. of times
// // for in loop: loops through the keys of an Object
// // for of loop: loops through the values of an Object
// // while loop: loops a block based on a specific condition
// // // do-while loop: while loop variant which runs atleast once

// // for loop:
// // for(let i=0;i<=5;i++){
// //     console.log(i)
// // }
// // Prog. to print sum of natural numbers from 1-10
// // let sum=0
// // let n=10
// // for(let i=1;i<n;i++){
// // sum +=(i)
// // console.log(sum)
// // }


// // let sum=0;
// // for (let i = 0; i < 15; i++) {
// //     if (i%2 != 0)
// //     {
// //         console.log(i);
// //         sum+=i;
    
// //     }
// // }
// // console.log(sum);

// // // while loop
// // var i=0;
// // while (i<10) {
// //     console.log(i);
// //     i++;
    
// // }
// // do-while loop
// // var i=0;
// // do {
// //     console.log(i);
// //     i++;
// // } while (i<10);

// // Q1. Write a program to print the marks of a student in an object using for loop
// // let Marks=0;

// // let marks=[{Abhi:92, Bhanu:70, Cat:67}]
// // for (let i = 0; i < marks.length; i++) {
// //     const Marks = marks[i];
// //     // console.log(Marks);
// //     console.log(Marks);
// // }
// // //  Q2. Write a program to try again until the user enters the correct number?
// // let cn=10;
// // let i;
// // while (i!=cn) {
// //     console.log("Try again");
// //     i=prompt ("Enter correct number");
      
// // }
// // console.log("Yes it's matched");
// // Q4. Mean
// var mean=(a,b,c,d) => {
// return (a+b+c+d)/4
// }
// console.log(mean(4,5,4,6) )
// console.log(mean(4,4,4,4) )

// for (let i = 0; i < 5; i++){
//     console.log(i);
// }
// let sum=0;
// for (let i = 0; i < 5; i++){
//     sum += (i+1);
//     console.log(sum);
// }

let n=5;

for (let i =1;i <= n;i++) {
     for (let j = 1; j<=i; j++) {
        console.log("");
     }
     for (let k = 1; k <= i; k++) {
        console.log(" *");
      
     }
     console.log(" \n");
     }
    
