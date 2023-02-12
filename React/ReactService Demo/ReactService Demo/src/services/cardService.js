const handleReadLaterClick = (data) => {
   // console.log(data);
    fetch('http://localhost:3001/api/v1/notes',{
    // fetch('http://localhost:3001/News',{
      method: 'POST', // or 'PUT'
       body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
        'Content-Type': 'application/json'
      }
      })
  }

  module.exports = {handleReadLaterClick};