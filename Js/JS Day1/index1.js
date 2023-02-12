var num1= 6;
var  num2= 3;

var choice =1 ;
var result;
var counter=0;
 while(counter<4)
 console.log("Calculation Options ..");

console.log("Select 1 For Addition..");
console.log("Select 2 For Substraction..");
console.log("Select 3 For Multiplication..");
console.log("Select 4 For Division..");
if(choice <4 && choice >1)
{
if(choice === 1)
{
    result = num1 + num2;
        console.log("Addition Result ", result);
}

else if(choice===2)
    {
        result = num1 - num2;
        console.log(result);
    }
else if( choice===3)
{
    result = num1 * num2;
    console.log(result);
}
else if(choice===4)
    {
        result = num1 / num2;
        console.log(result);
    }
    else
    {
        console.log("Invalid option");
    }
        choice++;
        counter++;

}