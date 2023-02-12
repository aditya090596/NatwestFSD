var num1=20;
var num2=20;
// if (num1===num2) {console.log("Number1 is equal to Number2")
//     }
//     else
//     console.log("Numbers are not equal");

     
   var Result=(num1===num2)? "Hi":"There";
    console.log(Result); 

    // To cal min and max

//     var empAge = [23,21,24,25,85,270,1090,231,450,50000,05];
//     min=Math.min(...empAge);
//     console.log(min);
//     max=Math.max(...empAge);
//     console.log(max);
// v
//     // Another way
//     var empAge = [23,21,24,25,85,270,1090,231,450,50000,05];
//     var min= empAge[0];
//     var i=0;
//     while(i <empAge.length)
//     {
//         if(empAge[i]<min){

        
//         min=empAge[i]}
//         i++;
//     }
//     console.log(min);
    var empAge = [23,21,24,25,85,270,1090,231,450,50000,05,80000];
    var max=empAge[0]
    var i=0;

    while (i<empAge.length){
        if(empAge[i]>max){
            max=empAge[i]
        }
        i++;
    }
console.log(max);
    
   
