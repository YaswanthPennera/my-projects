import React, { useState } from 'react'

const Login = ({showWelcomeHandler}) => {
  const ApiUrl="http://localhost:4000";
  const[email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const loginHandler=async(e)=>{
    e.preventDefault();
    try {
      const response=await fetch(`${ApiUrl}/vendor/login`,{
        method:"POST",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify({email,password})
      })
      const data= await response.json()
      if(response.ok){
        alert("successfully loged in");
        setEmail("");
        setPassword("");
        localStorage.setItem('loginToken',data.token);
        showWelcomeHandler();
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='login-page'>
    <div className='heading'>Vendor Login</div>
    <form className='login-info' onSubmit={loginHandler}>
        <label>Enter Email</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your Email'></input>
        <label>Password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your Password'></input>
        <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Login