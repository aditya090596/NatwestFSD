function retrieveAllStudents(event) {
    // console.log("Test");
    const httpreq = new XMLHttpRequest();
    httpreq.open('Get', 'http://localhost:3000/students');
    // console.log("Test");
    httpreq.setRequestHeader('Content-type', 'application/json');
    // console.log("Test");
    httpreq.send();
    httpreq.onreadystatechange = () =>
    // console.log("Test");
    {
        if (httpreq.readyState === XMLHttpRequest.DONE)
            console.log("Test");
        {
            const stdDetails = JSON.parse(httpreq.response);

            console.log(stdDetails);
            const tbody = document.getElementsByTagName('tbody')[0];
            let stdinnerhtmlcontentoftable = '';
            stdDetails.forEach(stdobj => {
                stdinnerhtmlcontentoftable = stdinnerhtmlcontentoftable + `

            <tr>
            <td>
                  ${stdobj.id}
                            </td>
                            <td>
                  ${stdobj.name}
            </td>
            <td>
            ${stdobj.email}
            </td>
            <td>
            ${stdobj.contactno}
            </td>
            <td>
            <button class="btn btn-primary" onclick=updateStudentToJSONDB($(stdobj.id))>Update</button>
            </td>
            
            <td>
            <button class="btn btn-primary" onclick=deleteStudentToJSONDB($(stdobj.id))>Delete</button>
            </td>
            </tr>
              `;
                tbody.innerHTML = stdinnerhtmlcontentoftable;
            })

        }
    }

}
function insertStudentToJSONDB(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const contactno = document.getElementById('contactno').value;
    const email = document.getElementById('email').value;
    const stdInput =
    {
        //Must match with db//   //Anything
        "name": name,
        "contactno": contactno,
        "email": email
    }
    const httpreq = new XMLHttpRequest();
    httpreq.open('POST', 'http://localhost:3000/students');
    // console.log("Test");
    httpreq.setRequestHeader('Content-type', 'application/json');
    // console.log("Test");
    httpreq.send(JSON.stringify(stdInput));
    httpreq.onreadystatechange = () =>
    // console.log("Test");
    {
        if(httpreq.readyState === XMLHttpRequest.DONE)
        { retrieveAllStudents(event);
        }
    }    
}
function updateStudentToJSONDB(event) {

}
function deleteStudentToJSONDB(event) {

}

