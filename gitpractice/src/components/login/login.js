import React, { useState } from 'react'

function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    const user ={email,password};
    fetch('http://localhost:3000',{
      method:'POST',
      action:'/',
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(user)
    })
    .then(()=>{
      console.log('new user')
      console.log(user)
    })
  }

  return (
    <>
      <div className='lead text-center'>JOIN US</div>
      <form onSubmit={handleSubmit} activity='/'>
        <label>
          Email-id:
          <input type="email-id" className="form-control" value={email} required name="email" onChange={(e)=>setEmail(e.target.value)}/>
        </label>
        <label>
          Password:
          <input type="password" value={password} className="form-control" required name="password" onChange={(e)=>setPassword(e.target.value)} />
        </label>
        <button type="submit" value="Submit" />
        <p>{email}</p>
      </form>
    </>
  )
}

export default Login