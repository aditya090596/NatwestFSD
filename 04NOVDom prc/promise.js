const a=50;
const b=70;

const  sum= ((p,q)=>{
 return new Promise((resolve, reject) => {
    if(a>b)
    {
        const sumresult=a+b;
        resolve (sumresult);
    }
    else{
        reject ("a is less than b")
    }
 })
})
const output=sum(a,b);
console.log(output);
output.then((data)=>{
    console.log(data)
    return data+50;
}).then((addeddata)=>
{return console.log("addeddata")
})//.catch((reject)=>{
//     console.log(reject);
// })

