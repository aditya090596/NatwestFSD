// /* Write a program to build a `Pyramid of stars` of given height */

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

}

module.exports = buildPyramid


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






