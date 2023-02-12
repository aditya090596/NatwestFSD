// Given an array of potential voters, return an object representing the results of the vote
// Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.

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

// function voterResults(arr) {
//    // your code here
// }

// const YoungVotes = voters.filter(fdata=>fdata.age <=26 && fdata.voted==true
// )

// console.log(YoungVotes);
// const numYoungPeople=voters.filter(fdata=>fdata.age <=26 )
// console.log(numYoungPeople);

function voterResults(voter) {
    let youngVotes = 0;
    
    let youth = 0;
    let midVotes = 0;
    let mids = 0;
    let oldVotes = 0;
    let olds = 0;
    for (var i = 0;  i<voter.length; i++) {
        if (voters[i].age >= 18 && voters[i].age <= 25 && voters[i].voted === true) {
            youngVotes++;
        }
        if (voters[i].age >= 18 && voters[i].age <= 25) {
            youth++;
        }
        if (voters[i].age >= 26 && voters[i].age <= 35 && voters[i].voted === true) {
            midVotes++;
        }
        if (voters[i].age >= 26 && voters[i].age <= 35) {
            mids++;
        }
        if (voters[i].age >= 36 && voters[i].age <= 55 && voters[i].voted === true) {
            oldVotes++;
        }
        if (voters[i].age >= 36 && voters[i].age <= 55) {
            olds++;
        }
    }

    return {
        youngVotes,
        youth,
        midVotes,
        mids,
        oldVotes,
        olds
    }

}
console.log(voterResults(voters))




// console.log(voterResults(voters)); // Returned value shown below:
// /*
// { numYoungVotes(18-25): 1,
//   numYoungPeople (18-25): 4,
//   numMidVotesPeople(26-35),: 3,
//   numMidsPeople(26-35): 4,
//   numOldVotesPeople (36-55): 3,
//   numOldsPeople (36-55): 4
// }
// */

voterResults(voters)