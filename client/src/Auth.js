import React, { useState } from "react";
import {useLocation, useNavigate} from "react-router"
import PetsIcon from '@mui/icons-material/Pets';
import './Auth.css'
import Logo from './logo.png'
function Auth({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, setloginUser] = useState("");
  const [loginPass, setloginPass] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isClicked, setIsClicked] = useState(true)

  function handleClick(){
    setIsClicked(isClicked=>!isClicked)
  }

  function handleSubmit2(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: loginUser, password: loginPass}),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }


 

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }

  return (
    <div>
      <img className="logoButton" src={Logo}/>

      <form style={isClicked ? {display:'none'} : {display:'flex'}}  onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <button type="submit" >Sign Up</button>
      </form>



      <form style={isClicked ? {display:'flex'} : {display:'none'}} onSubmit={handleSubmit2}>
        <h1>Login</h1>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={loginUser}
          onChange={(e) => setloginUser(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={loginPass}
          onChange={(e) => setloginPass(e.target.value)}
        />
        <button type="submit" >Login</button>
      </form>
      <p className="message">{isClicked? 'New To TinDopt?' : 'Already have an Account?'}</p>
      <button className="center" onClick={handleClick}>{isClicked? 'SignUp' : 'Login'}</button>
    </div>
  );
}

export default Auth;