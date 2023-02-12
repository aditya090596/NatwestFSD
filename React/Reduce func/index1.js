// Turn an array of voter objects into a count of how many people voted
function totalVotes(arr, filter) {

    let filterate= arr.filter(fdata=>fdata.voted==filter)
// console.log(b);
    var count=filterate.length;
    return count;
    // console.log(count);
}



var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
// function totalVotes(voters, filter) {
//       const V= arr.filter(vo=>{
//         vo.voted==filter
//         console.log(V);
//       }}
    
// //  }
//  var vote= voters.filter(fdata =>fdata.voted===true)
// let b= vote.length
// console.log(b);

a=totalVotes(voters,false)
console.log(a);


 
