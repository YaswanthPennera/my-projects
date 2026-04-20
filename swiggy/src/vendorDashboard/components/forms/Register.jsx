import React from 'react'
import { useState } from 'react'

const Register = ({showLoginHandler}) => {
  const [username,setUserName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const ApiUrl="http://localhost:4000"

  const HandleSubmit=async(e)=>{
    e.preventDefault();
    try{
    const response=await fetch(`${ApiUrl}/vendor/register`,{
      method:"POST",
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify({username,email,password})
    })

    const data=await response.json()
    console.log(data);
    if(response.ok){
      console.log(data);
      alert("Vendor registered Successfully");
      setUserName("");
      setEmail("");
      setPassword("")
      showLoginHandler();
    }

    }
    catch(error){
      console.log(error)
    }
  }
  
  return (
    <div className='register-page'>
    <div className='heading'>Vendor Register</div>
    <form className='register-info' onSubmit={ HandleSubmit}>
        <label>Enter UserName</label>
        <input type="text" placeholder='Enter your UserName' value={username} onChange={(e)=>setUserName(e.target.value)}></input>
        <label>Enter Email</label>
        <input type="email" placeholder='Enter your Email' value={email} onChange={(e)=>setEmail(e.target.value)} ></input>
        <label>Password</label>
        <input type="password" placeholder='Enter your Password' value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Register;