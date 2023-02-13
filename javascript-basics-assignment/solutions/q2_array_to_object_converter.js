/* Write a Program to convert an array of objects to an object
	based on a given key */


const convert = (arr, b) => {
	if (Array.isArray(arr)) {
		let obj = arr.reduce((accumulator, currentvalue) => {
			// console.log(accumulator);
			return { ...accumulator, [currentvalue[b]]: currentvalue }
		}, 2)
		return obj;
	}
	else {
		return null;
	}
};

/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }
	
	
*/

module.exports = convert;
