// Function 1.

const getCat = (age) => {
    if (age < 25) return ['youth', 'youngVotes'];
    if (age < 35) return ['mids', 'midVotes'];
    return ['olds', 'oldVotes'];
};

// Function 2 - User will call this function

const counts = (arr) => arr.reduce((accumulator, { age, voted }) => {
    const [prop, voteProp] = getCat(age); // function "Counts" will call function "getCat"
    accumulator[prop] = (accumulator[prop] || 0) + 1;

    if (voted) {
        accumulator[voteProp] = (accumulator[voteProp] || 0) + 1;
    }
    return accumulator;
  }, {});

//   console.log(counts);

var voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];

let a = counts(voters)
console.log(a);