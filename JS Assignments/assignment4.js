// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

const fruits = [

    { name: "grapes", color: "green", pricePerKg: 100 },
    { name: "apple", color: "red", pricePerKg: 150 },
    { name: "mango", color: "yellow", pricePerKg: 90 }
]


const fruitname=(arr,fname )=>

{
    let filterate= arr.filter(fdata =>fdata.name==fname)
    const result= filterate[0].color + " "+ filterate[0].pricePerKg 
    return result;

}

let a= fruitname(fruits,"grapes")
console.log(a);