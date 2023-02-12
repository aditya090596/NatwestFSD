// function cb(token){
//     return token;
    
// }

export const checkAuth = async (data,cb) => {
   // cb("aaa");
    let token = "";
    let userInfo = {
        username : data.username,
        password : data.password
    }
    try {
        const response = await fetch('http://localhost:3001/auth/v1', {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(userInfo), // data can be `string` or {object}!
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const json = await response.json();
        console.log('Success:', JSON.stringify(json));
        localStorage.setItem('token',json.token);
        localStorage.setItem('username',data.username);
            cb(json);
    } catch (error) {
        console.error('Error:', error);
      }

     // return token;
      
    
}
