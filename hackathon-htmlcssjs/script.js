

function addUser(event) {
    event.preventDefault();

    const fname = document.getElementById('fname').value;
    const email = document.getElementById('validationCustom03').value;
    const address = document.getElementById('address').value;
    const accnumber = document.getElementById('accnumber').value;
    const pnumber = document.getElementById('Phonenumber').value;
    const password = document.getElementById('validationCustom04').value;
    const repassword = document.getElementById('validationCustom05').value;
    const terms = document.getElementById('invalidCheck');

    const database =
    {
        "FullName": fname,
        "email": email,
        "address": address,
        "AccountNumber": accnumber,
        "PhoneNumber": pnumber,
        "password": password,
    }

    let emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let passwordformat = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{6,}$/;
    var phoneno = /^\d{10}$/;
    if (fname == ""  || email == "" || address == "" || accnumber == "" || pnumber == "" || password == "" || repassword == "" || terms.checked == false) { alert(" All details are mandatory. Please enter all your details") }

    else if (!email.match(emailformat)) {
        alert("Invalid email entered")
    }
    else if(!pnumber.match(phoneno)){
        alert ("Your phone number must be of 10 digits")
    }
    else if (!password.match(passwordformat)) { alert("password should contain atleast 1 special character,1 Uppercase,1 Lowercase and Number") }
    else if (password !== repassword) {
        alert("Password doesn't match")
    } else {

        const getreq = new XMLHttpRequest();

        getreq.open('GET', 'http://localhost:3000/database');

        getreq.send();

        getreq.onreadystatechange = () => {

            if (getreq.readyState === XMLHttpRequest.DONE) {
                const usersDetails = JSON.parse(getreq.response);
                let emaildatabase = [];

                usersDetails.forEach(element => {
                    emaildatabase.push(element.email)
                });


                if (emaildatabase.indexOf(email) == -1) {

                    const httpreq = new XMLHttpRequest();

                    httpreq.open('POST', 'http://localhost:3000/database');
                    httpreq.setRequestHeader('Content-Type', 'application/json');
                    httpreq.send(JSON.stringify(database));

                    httpreq.onreadystatechange = () => {
                        if (httpreq.readyState === XMLHttpRequest.DONE) {
                            console.log("Update done");
                        }
                    }
                } else {
                    alert("Email already exist")
                }
            }
        }
    }
}

function login(event) {

    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const pwd = document.getElementById("loginPassword").value;

    if (email == "" || pwd == "") {
        alert("All details are mandatory")
    } else {
        const getreq = new XMLHttpRequest();

        getreq.open('GET', 'http://localhost:3000/database');

        getreq.send();

        getreq.onreadystatechange = () => {

            if (getreq.readyState === XMLHttpRequest.DONE) {
                const usersDetails = JSON.parse(getreq.response);
                let emaildatabase = [];
                let pwddatabase = [];

                usersDetails.forEach(element => {
                    emaildatabase.push(element.email)
                    pwddatabase.push(element.password)
                })

                console.log(emaildatabase);
                console.log(pwddatabase);

                let index = emaildatabase.indexOf(email)

                if (index == -1) {
                    alert("Email not registered")
                } else if (pwd !== pwddatabase[index]) {
                    alert("Incorrect Password")
                } else {
                    window.open('http://127.0.0.1:5502/loggedin.html?', '_self')
                }
            }
        }
    }
}
