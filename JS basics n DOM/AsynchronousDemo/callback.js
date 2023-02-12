// const p=200, q =100;

// function sum(a,b,abc,cde,dcb,cbg,jk)
// {
//     abc(a+b);
//     cde(a-b);
// }


// sum(p,q,function(ss){

//     console.log(ss);

//     // console.log(sumresult);

//     // let add10 = sumresult+10;

//     // console.log(add10);

// },function(diff){

//     console.log(diff);

    // console.log(sumresult);

    // let add10 = sumresult+10;

    // console.log(add10);

// })

// sum(p,q,(sumresult,ss)=>{

//     console.log(sumresult);
//     console.log(ss);

//     let add10 = sumresult+10;

//     console.log(add10);

// })
const V=200, A =100;

function sum(a,b,add, dif){
    add(a+b);
    dif(a-b); 
}


  




const Ram=102, Shyam=220 , Ghanshyam=1023;
 function value(a,b,c,mul,div){
    mul(a*b);
    div(a/b);
 }
 value(Ram,Shyam,Ghanshyam,function(result){
   console.log(result)},function(result1){console.log(result1)} 
 );