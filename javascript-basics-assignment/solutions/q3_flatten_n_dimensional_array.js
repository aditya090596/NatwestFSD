/* Write a Program to Flatten a given n-dimensional array */

const flatten = (arr) => {
	if (Array.isArray(arr)) {

		let n = arr.length
		return arr.flat(n);

	}
	else {
		return null;
	}
};

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
