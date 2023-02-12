var empDetails=
[
    {empId: 101,empName: "Tim",empAge: 21,empSal: 12345.22,empContact: 355678},
    {empId: 102,empName: "Rim",empAge: 23,empSal: 32345.00,empContact: 365678},
    {empId: 103,empName: "Jim",empAge: 22,empSal: 22345.00,empContact: 375678},
    {empId: 104,empName: "Kim",empAge: 23,empSal: 42345.00,empContact: 315678},
    {empId: 105,empName: "Sim",empAge: 21,empSal: 32345.00,empContact: 325678},
    {empId: 106,empName: "Dim",empAge: 23,empSal: 42345.00,empContact: 344678},
    {empId: 107,empName: "Jam",empAge: 24,empSal: 52345.00,empContact: 345678}
]
// // empDetails.push({empID:110,empName:"Vim",EmpAge:30,EmpSal:50000.458});
// // console.log(empDetails);
//  empDetails.sort( (emp1,emp2)=>{
//     return emp1.empAge === emp2.empAge ? 0 : emp1.empAge > emp2.empAge ? 1 : -1;})

// // console.log(empDetails);

// var array=[2000,1000,5000,6000,400,200,100,2008,-600,-1,-500];
// array.sort((n1,n2)=>{return n1===n2 ? 0:n1>n2 ?1:-1});
// console.log(array);

// array.sort((n1,n2)=>{return n1===n2 ?0 : n2>n1 ?1 :-1 });
// console.log(array);

// array.sort((n1,n2)=>{return n1>n2 ?1:0});
// console.log(array);

// empDetails.forEach(empDetails => { console.log(empDetails.empId,"  ",empDetails.empName) 
    
// });
// empDetails.forEach(empDetails=>{console.log(empDetails.empAge," ",empDetails.empName)});

// emp21Age=empDetails.filter(emp => emp.empAge<=23);
// console.log(emp21Age);
empSalary=empDetails.filter(emp=> emp.empSal === 52345.00);
console.log(empSalary);
