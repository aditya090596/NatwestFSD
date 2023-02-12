/* Write a Program to Flatten a given n-dimensional array */

const flatten = (arr) => {
	// Write your code here
if (Array.isArray(arr)) {
    

    let n=arr.length
 return arr.flat(n);

}
else
{ return null;
}
}
module.exports = flatten;
/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/



//  a= [1, [2, 3], [[4, 5], [6, 7]], [[[8, 9], 10]]]

// let b=flatten(a)
// console.log(b);
