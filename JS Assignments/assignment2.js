/* Write a Program to convert an array of objects to an object
    based on a given key */

const convert = (arr, filter) => {
    if (Array.isArray(arr)) {
        let obj = arr.reduce((accumulator, currentvalue) => {
            console.log(accumulator);
            return { ...accumulator, [currentvalue[filter]]: currentvalue }
        }, {})
        return obj;
    }
    else {
        return null;
    }
}

module.exports = convert



// /* For example,
// INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
// OUTPUT - {
//             '1': {id: 1, value: 'abc'},
//             '2': {id: 2, value: 'xyz'}
//          }


// */

let data=[{ id: 1, name: 'Ankit', role: 'Developer'},
				{ id: 2, name: 'Pankhuri', role: 'Lead'},
				{ id: 3, name: 'Anubha', role: 'QA'}];
let a = convert(data, "id")
console.log(a);