function registercx(event) {
    event.preventDefault();

    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('exampleInputEmail1').value;
    const address = document.getElementById('address').value;
    const rnumber = document.getElementById('rollnumber').value;
    const pnumber = document.getElementById('Phonenumber').value;
    const password = document.getElementById('exampleInputPassword1').value;
    const repassword = document.getElementById('exampleInputPassword2').value;
    const terms = document.getElementById('exampleCheck1');

    const database =
    {
        "Firstname": fname,
        "Lastname": lname,
        "email": email,
        "address": address,
        "RollNumber": rnumber,
        "PhoneNumber": pnumber,
        "pwd": password,

    }
    let emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let pwdformat = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{6,}$/;
    if (fname == "" || lname == "" || email == "" || address == "" || rnumber == "" || pnumber == "" || password == "" || repassword == "" || terms.checked == false) { alert(" All details are mandatory. Please enter all your details") }
    else if (!email.match(emailformat)) {
        alert("Invalid email entered")
    }
    else if (!password.match(pwdformat)) { alert("password should contain atleast 1 special character,1 Uppercase,1 Lowercase and Number") }
    else if (password !== repassword) {
        alert("Password doesn't match")
    }
    else {
        const getdetails = new XMLHttpRequest();
        getdetails.open('GET', 'http://localhost:3000/stddetails ');
        getdetails.send();
        getdetails.onreadystatechange = () => {
            if (getdetails.readyState === XMLHttpRequest.DONE) {
                const userDetails = JSON.parse(getdetails.response);
                console.log(userDetails);
                let emaildatabase = [];
                userDetails.forEach(element => {
                    emaildatabase.push(element.email)
                });

                if (emaildatabase.indexOf(email) == -1) {
                    const getdetails = new XMLHttpRequest();
                    getdetails.open('POST', 'http://localhost:3000/stddetails');
                    getdetails.setRequestHeader('Content-Type', 'application/json');
                    getdetails.send(JSON.stringify(database));
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
