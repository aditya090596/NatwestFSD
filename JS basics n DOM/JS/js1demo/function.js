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