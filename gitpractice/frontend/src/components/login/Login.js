import React from 'react'
import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import About from '../About/About'

function Login() {
  const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const writeUser = () => {
    axios.post("http://localhost:3001/Login", {
      email,
      password,
    }).then((response) => {
      console.log("response received")
      console.log(response.data.status)
      if(response.data.status==='ok')
      navigate("/About")
      else
      {
        alert("Invalid password")
      }
     
    });
  };
	return (
		<div>
			<h1>Login</h1>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<button onClick={writeUser}> Login</button>
		</div>
	)
}

export default Login