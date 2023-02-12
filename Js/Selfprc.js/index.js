function calculate()
{
var num1= document.getElementById("textfield1").value ;
var num2= document.getElementById("textfield2").value;
var result = 0;
var choice = document.getElementById("calcchoice").value;

if(choice ===1)
{
    result=parseInt(num1) + parseInt(num2);
    console.log(result);
}
else{

}
// else if(choice === '2'){
//     result=parseInt(num1)- parseInt (num2);

// }
// switch(parseInt(choice))
//     {

//         case 1:
//             console.log("Inside ...Add ");
//             result = parseInt(num1) + parseInt(num2);
//         break;
//         case 2:
//             result = parseInt(num1) - parseInt(num2);
//         break;
//         case 3:
//             result = parseInt(num1) * parseInt(num2);
//         break;
//         case 4:
//             result = parseInt(num1) / parseInt(num2);
//         break;
//         default:
//             console.log("Invalid choice ..")
//         break;
//     }

document.getElementById("finalresult").textContent = result;
console.log("Final Data",result);
}