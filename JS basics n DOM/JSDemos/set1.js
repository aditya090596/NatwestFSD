// // 1. Declare an array to store salary of 10 employees

// 2. Display the salary of all the 10 employees on the screen

// 3. Display the average salary of 10 employees on the screen

// 4. Display the over all total salary

// 5. Display the minimum salary

// 6. Display the maximum salary 

// // 7. Display the total count of employees

var empName = ["Q","R","S","T","U","V","W","X","Y","Z"];
var empSalary = [23,21,24,25,32,23,80,32,45,20];
var i=0;
while(i < empSalary.length)
{
    console.log("Name : ", empName[i]," :::  Age : ",empSalary[i]);
    i++;
}

var i=0;
var sum=0;
while(i< empSalary.length)
{
  sum += empSalary[i]
  i++;
}
console.log("The sum is -", sum);
console.log ("The avg is ", sum/10);
var i=0;
var sum=0;
for (i = 0; i < empSalary.length; sum +=empSalary [i],i++) {
    console.log(" The ts is, ");
    
}

 