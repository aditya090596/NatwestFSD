var empDetails=
[
    {empId: 101,empName: "Tim",empAge: 21,empSal: 12345.22,empContact: 355678},
    {empId: 102,empName: "Rim",empAge: 23,empSal: 32345.00,empContact: 365678},
    {empId: 103,empName: "Jim",empAge: 22,empSal: 22345.00,empContact: 375678},
    {empId: 104,empName: "Kim",empAge: 23,empSal: 42345.00,empContact: 315678},
    {empId: 105,empName: "Sim",empAge: 21,empSal: 32345.00,empContact: 325678},
    {empId: 106,empName: "Dim",empAge: 23,empSal: 42345.00,empContact: 344678},
    {empId: 107,empName: "Jam",empAge: 24,empSal: 52345.00,empContact: 345678}]

    emp21Age=empDetails.filter(emp => emp.empAge===23);
console.log(emp21Age);