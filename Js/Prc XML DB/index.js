function retrieveAllStudents(event) {
    const httpreq = new XMLHttpRequest();
    httpreq.open('GET', 'http://localhost:3000/students');
    // console.log("Test");
    httpreq.setRequestHeader('Content-Type', 'application/json');
    httpreq.send();
    // console.log(Test);
    httpreq.onreadystatechange = () => { 

        if (httpreq.readyState === XMLHttpRequest.DONE) {
            const stdDetails = JSON.parse(httpreq.response);
            console.log(stdDetails);


            const tbody = document.getElementsByTagName('tbody')[0];
            let stdinnerHTMLContentofTable = '';
            stdDetails.forEach(stdObj => {
                stdinnerHTMLContentofTable = stdinnerHTMLContentofTable + `
    <tr>
    <td>
    ${stdObj.id}
    </td>
    <td>
    ${stdObj.name}
    </td>
    <td>
    ${stdObj.contactno}
    </td>
    <td>
    ${stdObj.email}
    </td>
    <td>
    <button class="btn btn-primary"onclick=updateStudentfromJSONDB(${stdObj.id})>Update</button>
    </td>
    <td>
    <button class="btn btn-primary" onclick=deleteStudentfromJSONDB(${stdObj.id})>Delete</button>
    </td>
    </tr>
    
    `
                tbody.innerHTML = stdinnerHTMLContentofTable;

            });

        }
    }
}

function insertStudentToJSONDB(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const contactno = document.getElementById('contactno').value;
    const email = document.getElementById('email').value;
    const stdinput = {
        "name": name,
        "email": email,
        "contactno": contactno

    }
    const httpreq = new XMLHttpRequest();
    httpreq.open('POST', 'http://localhost:3000/students');
    // console.log("Test");
    httpreq.setRequestHeader('Content-Type', 'application/json');
    httpreq.send(JSON.stringify(stdInput));
    // console.log(Test);
    httpreq.onreadystatechange = () => {
        if (httpreq.readyState === XMLHttpRequest.DONE) {
            retrieveAllStudents(event);
        }
    }
}





























