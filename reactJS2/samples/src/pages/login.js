import { useState, useEffect } from "react";
import React from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameValid, setIsUsernameValid] = useState(false);

  useEffect(() => {
    setIsUsernameValid(/^[a-zA-Z-_]{3,20}$/.test(username));
    return () => {};
  }, [username]);

  const processLogin = (e) => {
    e.preventDefault();
    console.log(username);
    return;
  };

  return (
    <div>
      Please Login:
      <form onSubmit={processLogin}>
        <input
          type="text"
          name="username"
          style={username && isUsernameValid ? {} : { borderBottom: "4px solid red" }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;





    
    
    
// Document




// main.innerHTML = "Loading...";
// const myPromise = new Promise( (resOk,resErr) => {
//     const fetchPromise = fetch("https://jsonplaceholder.typicode.com/users");
//     const main = document.getElementById("main");
//     resOk(fetchPromise);
// });

// myPromise.then(response => {
//     return response.json();
// }, p => console.log(p))
// .then(people => {
// main.innerHTML = '';
// for(let {name} of people)
//     main.innerHTML += name+'';
// })
// .catch(e=> console.log('ERROR: '+e))



