/* 1. Take input
2. Store in a variable
3. Check if all field are completed
4. Get data from database
5. Check if email is already reistered
6. Then POST
7. Alert you're registered
*/
// for log in
/*  Take input
Store in a variable
Check if all field are completed
Get data from database
Check if email is already reistered
Check if pswrd is correct

*/
function Signup(event) {
    event.preventDefault();

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("exampleInputEmail1").value;
    const password = document.getElementById("exampleInputPassword1").value;
    const repassword = document.getElementById("exampleInputPassword2").value;
    const terms = document.getElementById("exampleCheck1");

    const database =
    {
        "firstname": fname,
        "lastname": lname,
        "email": email,
        "password": password
    }
    if (fname == "" || lname == "" || email == "" || password == "" || repassword == "" || terms.checked == false) {
        alert("All fields are mandatory")
    }
    else if (password !== repassword) {
        alert("Password doesn't match")

    }
    else {
        const getreq = new XMLHttpRequest();
        getreq.open('GET', 'http://localhost:3000/database');

        getreq.setRequestHeader('Content-Type', 'application/json')

        getreq.send();
        getreq.onreadystatechange = () => {
            if (getreq.readyState === XMLHttpRequest.DONE) {
                const recordeddetails = JSON.parse(getreq.response);
                let emaildatabase = [];
                recordeddetails.forEach(element => {
                    emaildatabase.push(element.email)
                });

                if (emaildatabase.indexOf(email) == -1) {

                    const httpreq = new XMLHttpRequest();

                    httpreq.open('POST', 'http://localhost:3000/database');
                    httpreq.setRequestHeader('Content-Type', 'application/json');
                    httpreq.send(JSON.stringify(database));

                    httpreq.onreadystatechange = () => {
                        if (httpreq.readyState === XMLHttpRequest.DONE) {
                            alert("Registration successful")
                        }
                    }
                } else {
                    alert("Email already exist")
                }

            }
        }


    }

}

function login (event)
