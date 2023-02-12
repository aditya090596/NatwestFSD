let data = [
    { id: 1, name: 'Ankit', role: 'Developer' },
    { id: 2, name: 'Pankhuri', role: 'Lead' },
    { id: 3, name: 'Anubha', role: 'QA' }
]

const convert = (arr, b) => {
    
    return new Promise((resolve, reject) => {

        if (Array.isArray(arr)) {

            const result = arr.reduce((accumulator, currentvalue) => {

                return { ...accumulator, [currentvalue[b]]: currentvalue }

            }, 2)

            resolve(result);
        }
        else {
            reject(null)
        }
    })
}

let a = convert(data, 'id')

a.then(
    function (value) { console.log(value) }
 )//.catch(
//     function (error) { console.log(error) }
// )