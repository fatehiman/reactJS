import { useState, useEffect } from "react";
import React from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameValid, setIsUsernameValid] = useState(false);

  useEffect(() => {
    setIsUsernameValid(/\w[a-zA-Z]/.test(username));
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
        <input type="text" name="username" style={  isUsernameValid ? {} : {borderBottom:'4px solid red' } } value={username} onChange={(e) => setUsername(e.target.value)} />        
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
