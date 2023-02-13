// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here
var stddetails = [
    { name: "Adi", Grammer: 75, Accounts: 80, Physics: null },
    { name: "Aashish", Grammer: 84, Physics: 91, Accounts: null },
    { name: "Amy", Grammer: 56, Accounts: 70, Physics: null },
    { name: "Sandeep", Grammer: 94, Physics: 90, Accounts: null },
    { name: "Vivek", Grammer: 55, Accounts: 80, Physics: null }
]

stddetails.forEach(std => {
    result = (std.name + " - " + (std.Grammer + std.Accounts + std.Physics) / 2 + " %")
    console.log(result);
})