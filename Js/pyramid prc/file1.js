// /* Write a program to build a `Pyramid of stars` of given height */

//   const buildPyramid = (totalrows) => {
// 	// Write your code here
// let rows=6;
// for (let i = 1; i <= rows; i++) {
    
//    let string= ('')
//    let star=('*')
//     console.log(star);
    
// }
// };

// /* For example,
// INPUT - buildPyramid(6)
// OUTPUT -
//      *
//     * *
//    * * *
//   * * * *
//  * * * * *
// * * * * * *

// */





// //  for (let i = 1; i <= rows; i++) {
// //     let string="";
// //     let spaces =" ".repeat(rows-i)
    
// //     let stars="* ".repeat(i)
// //     string +=(spaces +stars+ "  \n")
 
// //  return string;

// //  }
   
// const buildPyramid=(rows) =>{
//      let string ="";
//      for (let i = 1; i <=rows; i++) {
//          let spaces = " ".repeat((rows+1)-i)
//          let stars ="* ".repeat(i)// 1 space after star
//          string += (spaces + stars +" \n")     }
//      return string;
//  }
    
// //  module.exports ={
// //     buildPyramid
// //      }
//     a=buildPyramid(5)
//     console.log(a);
let totalrows=5;
let string="";

for (let line = 1; line <= totalrows; line++) {
    
    for (let j = 1; j <= totalrows-line; j++) {
       string+=" ";
    }
       for (let k = 1; k <= line; k++) {
        
        string+=" *";
       } 
       string+= "  \n"
        // console.log(space);
    
        
        // for (let k = 1; k <= line; k++) {
        //    let star="* ".repeat
        //     // console.log(space+star+" \n");
        //     string+= (space+star+" \n")
        //     console.log(string);
           
        // }
    }
    return string;
    // console.log(string);
//   }
    // console.log(string);
    // module.exports={buildPyramid  }// /* Write a program to build a `Pyramid of stars` of given height */

//   const buildPyramid = (totalrows) => {
// 	// Write your code here
// let rows=6;
// for (let i = 1; i <= rows; i++) {
    
//    let string= ('')
//    let star=('*')
//     console.log(star);
    
// }
// };

// /* For example,
// INPUT - buildPyramid(6)
// OUTPUT -
//      *
//     * *
//    * * *
//   * * * *
//  * * * * *
// * * * * * *

// */





// //  for (let i = 1; i <= rows; i++) {
// //     let string="";
// //     let spaces =" ".repeat(rows-i)
    
// //     let stars="* ".repeat(i)
// //     string +=(spaces +stars+ "  \n")
 
// //  return string;

// //  }
   
// const buildPyramid=(rows) =>{
//      let string ="";
//      for (let i = 1; i <=rows; i++) {
//          let spaces = " ".repeat((rows+1)-i)
//          let stars ="* ".repeat(i)// 1 space after star
//          string += (spaces + stars +" \n")     }
//      return string;
//  }
    
// //  module.exports ={
// //     buildPyramid
// //      }
//     a=buildPyramid(5)
//     console.log(a);
    let totalrows=5;
    let string="";
    
    for (let line = 1; line <= totalrows; line++) {
        
        for (let j = 1; j <= totalrows-line; j++) {
           string+=" ";
        }
           for (let k = 1; k <= line; k++) {
            
            string+=" *";
           } 
           string+= "  \n"
            // console.log(space);
        
            
            // for (let k = 1; k <= line; k++) {
            //    let star="* ".repeat
            //     // console.log(space+star+" \n");
            //     string+= (space+star+" \n")
            //     console.log(string);
               
            // }
        }
        return string;
        // console.log(string);
//   }
        // console.log(string);
        // module.exports={buildPyramid  }