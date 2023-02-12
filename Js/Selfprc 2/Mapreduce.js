//Higher order methods
// forEach loop: calls a function, once for each arrray Element
// const a=[1,2,3]  a.forEach [value,index,array0=>{(function logic)]}

// Map mthod:  created a new array by performing same operatons on each array element
// cont a=[1,2,3 a.map((value, index,array)=>{ return.value*value;})]

// array=[45,23,42]
// let a=array.map((element)=>{
//     return element+1;})
//     console.log(a);

// let b=array.forEach((element)=>{   //Wrong doesn't create a new array
//     return element *element
// })
// console.log(b);

// array.forEach(element => {
//     console.log(element * element); 

// });

// array=[45,23,42]
// let c=array.map((value,index,array)=>{
//     console.log(value,index,array);
//     return value+index 
//     return value+index+array
// })
//     console.log(c);

//      array1=[45,23,42, 21,05,450,78,29] // doesn't affect the original array
    // let e= array1.filter((z) =>{
    //     return z<78
    // })
    // console.log(e);
  
//Reduce method

const prices = [12,22,23,24,22,33,44,55,66,77,88]

// prices = [22,33,44]

// var tot = prices.reduce(function(totalp,nextval){
// //     totalp +=nextval;
// //     return totalp;
// // })

// // console.log(tot);
// return totalp + nextval})
// console.log(tot);
  let arr= prices.reduce((totalp,nextval)=>{
    return totalp + nextval

  })
console.log(arr);