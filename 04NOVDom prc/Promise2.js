const x = 20;
const y = 100;
function mul(a, b) {
    return new Promise((resolve, reject) => {
        if (a > b) {
            const multiply = a * b
            resolve(multiply);
            

        }
        else {
            reject("a is less tha b");
        }
    })

}
 const output=mul(x,y);
 output.then((data)=>{
    console.log(data);
 }).catch(reject=>{
    console.log(reject);
 })