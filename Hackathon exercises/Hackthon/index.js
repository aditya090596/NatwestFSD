function insertdatatoJSONDB(event) {

    event.preventDefault();
    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    // const password=document.getElementById('inputPassword3').value;
    const userdata =
    {
        "name": name,
        "email": email,
        // "password":password
    }
    const httpreq = new XMLHttpRequest();
    httpreq.open('POST', `http://localhost:3000/userdetails`);
    httpreq.setRequestHeader('Content-Type', 'application/json');
    httpreq.send(JSON.stringify(userdata))
    httpreq.onreadystatechange = () => {
        if (httpreq.readyState === XMLHttpRequest.DONE) {
            console.log("Done");
        }
    }
}
