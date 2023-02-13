/* Write a program to build a `Pyramid of stars` of given height */
 row=5;
const buildPyramid = (rows) => {
	let string = "";

     for (let line = 1; line <= rows; line++) {

          for (let j = 1; j <= rows - line; j++) {
               string += " ";
          }
          for (let k = 1; k <= line; k++) {

               string += " *";
          }
          string += "  \n"

     }
     return string;
};

// a=buildPyramid(6)
// console.log(a);
/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
