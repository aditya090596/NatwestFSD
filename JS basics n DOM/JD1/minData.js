// var empAge= [24,28,53,10]
// var min= empAge[0]
// var counter=0

// while( counter < empAge.length)
// {
//     if (empAge[counter]< min)
//     {
//     min=empAge[counter]
//     }
// counter++;}

// console.log( "The min age is ", min);

//   var empAge= [24,28,53,10]
//     var min= 1000
//     var counter=0
//     while( counter <empAge.length)
// {
//     if( empAge[counter] < min)
//     {
//         min=empAge [counter]
//     }
//     counter++
// }
// console.log( "The min age is ", min);
// sorting
var empAge=[100,93,84,99,110]
// var counter=0
// while( counter<empAge.length)
// {
// if ( empAge[counter]>empAge[counter+ 1])
// {temp=empAge[counter+1]
// empAge[counter]=temp
// }
// counter++
// }
// console.log(empAge);
console.log(empAge.sort(function(z,a){return a-z}));
