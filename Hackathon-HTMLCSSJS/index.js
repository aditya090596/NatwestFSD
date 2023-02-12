function registercx(event) {
    event.preventDefault();

    const fname = document.getElementById('fname').value;
    
    const email = document.getElementById('exampleInputEmail1').value;
    const address = document.getElementById('address').value;
    const accnumber = document.getElementById('accnumber').value;
    const pnumber = document.getElementById('Phonenumber').value;
    const password = document.getElementById('exampleInputPassword1').value;
    const repassword = document.getElementById('exampleInputPassword2').value;
    const terms = document.getElementById('exampleCheck1');

    const Cxdetails =
    {
        "FullName": fname,
        "email": email,
        "address": address,
        "AccountNumber": accnumber,
        "PhoneNumber": pnumber,
        "password": password,

    }
    let emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let pwdformat = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{6,}$/;
    if (fname == ""  || email == "" || address == "" || accnumber == "" || pnumber == "" || password == "" || repassword == "" || terms.checked == false) { alert(" All details are mandatory. Please enter all your details") }
    else if (!email.match(emailformat)) {
        alert("Invalid email entered")
    }
    else if (!password.match(pwdformat)) { alert("password should contain atleast 1 special character,1 Uppercase,1 Lowercase and Number") }
    else if (password !== repassword) {
        alert("Password doesn't match")
    }
    else {
        const getdetails = new XMLHttpRequest();
        getdetails.open('GET', 'http://localhost:3000/Cxdetails  ');
        getdetails.send();
        getdetails.onreadystatechange = () => {
            if (getdetails.readyState === XMLHttpRequest.DONE) {
                const userDetails = JSON.parse(getdetails.response);
                console.log(userDetails);
                let emailCxdetails = [];
                userDetails.forEach(element => {
                    emailCxdetails.push(element.email)
                });

                if (emailCxdetails.indexOf(email) == -1) {
                    const getdetails = new XMLHttpRequest();
                    getdetails.open('POST', 'http://localhost:3000/Cxdetails ');
                    getdetails.setRequestHeader('Content-Type', 'application/json');
                    getdetails.send(JSON.stringify(Cxdetails));
                    getdetails.onreadystatechange = () => {
                         if (getdetails.readyState === XMLHttpRequest.DONE) {
                            console.log("DONE");
                        }
                    }
                } else {
                    alert("Email already exist")
                }
                

            }

        }
    }
}

// function login(event) {

//     event.preventDefault();

//     const email = document.getElementById("loginEmail").value;
//     const password = document.getElementById("loginPassword").value;

//     if (email == "" || password == "") {
//         alert("All details are mandatory")
//     } else {
//         const getdetails = new XMLHttpRequest();

//         getdetails.open('GET', 'http://localhost:3000/Cxdetails');

//         getdetails.send();

//         getdetails.onreadystatechange = () => {

//             if (getdetails.readyState === XMLHttpRequest.DONE) {
//                 const usersDetails = JSON.parse(getdetails.response);
//                 let emailCxdetails = [];
//                 let passwordCxdetails = [];

//                 usersDetails.forEach(element => {
//                     emailCxdetails.push(element.email)
//                     passwordCxdetails.push(element.password)
//                 })

//                 console.log(emailCxdetails);
//                 console.log(passwordCxdetails);

//                 let index = emailCxdetails.indexOf(email)

//                 if (index == -1) {
//                     alert("Email not registered")
//                 } else if (password !== passwordCxdetails[index]) {
//                     alert("Incorrect Password")
//                 } else {
//                     window.open('http://http://127.0.0.1:5501/loggedin.html?', '_self')
//                 }
//             }
//         }
//     }
// }