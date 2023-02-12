// let marks = [76, 87, 43, 69, 95]
// console.log("Length of array is", marks.length);
// let sum = 0;

// for (let i = [0]; i < marks.length; i++) {
//     const Marks = marks[i];
//     console.log(Marks);
// }
// console.log(marks[1]);
// console.log(marks[4]);

// Array methods

// let b=num.toString() //b is now string
// console.log(b, typeof b);
// let c=num.join("_")
// console.log(c,typeof c);
// let d=num.join("and")
// console.log(d);

// pop

//  num.pop() // remove the last element of an array
//  console.log(num);
//  let r=num.pop();
//  console.log(num, r); // it will give the popped element

 //push

//  num.push(86)
//  console.log(num);
//  let v=num.push();
//  console.log(v);
//  num.push(77);
//  let p=num.push();
//  console.log(p);

 //shift: Remove element from the start of the array

//  let r= num.shift();
//  console.log(num);
//  console.log(num,r);
 // unshfit :Add the element to the begining
//  let r=num.unshift(78);
//  console.log(num,r);
 //delete
//  delete num[0] // doesn't affect the array length
//  console.log(num);

// Concat method : doesn't change the existing array

// let num1= [2,5,20,19,50,28]
// let num2=[45,123,54,395,234]
// let newArray=num.concat(num1)
// console.log(newArray,);
// let new1Array=num.concat(num1,num2)
// console.log(new1Array);
// console.log(new1Array.length);

// Sort method

//  let i=num.sort() //will arrange in alphabetical order
//  console.log(i);

// let compare= (a,b)=>{
//     return a-b
// }
// num.sort(compare)
// console.log(num);

// num.sort((n1,n2)=>{ 
//     return n1>n2 ?1:0;
// })
// console.log(num);

// //reverse

// num.reverse()
// console.log(num);

//splice and slice method

//splice : return delete item and modfiy sorce array
let num=[2,4,12,20,50,12]
// let d=num.splice( 1,4,256,379,501,343 ) //deleting the numbers from array1-4 and replacing by other numbers) modifies the orinial array
// console.log(num,d);
// let d=num.splice(2,4,342,123,567)
// console.log(num);

// slice method

// let d=num.slice(4) // doesn't modify originla array
// console.log(d);


let d=num.slice(1,3) //doesn't include last index
console.log(d);


