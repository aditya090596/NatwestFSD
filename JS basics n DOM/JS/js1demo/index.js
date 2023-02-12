function calculate()
{
var n1=document.getElementById("num1").value;
var n2=document.getElementById("num2").value;
var result=0;
var choice=document.getElementById("choicecalc").value;

if (choice === '1')
{
    result= parseInt(n1) + parseInt(n2);
    console.log("Addition of the numbers is",result);
}
else if (choice === '2')
{
    result=parseInt(n1) - parseInt(n2);
    console.log("Sub of the numers is ",result);
}
else if (choice === '3')
{
    result=parseInt(n1) - parseInt(n2);
    console.log("Multiplications of the numers is ",result);
}
else if (choice === '4')
{
    result=parseInt(n1) - parseInt(n2);
    console.log("Division is ",result);
}
else{
    console.log("invalid");
}



document.getElementById("finalresult").textContent = result;
    console.log("Final Data",result);
}