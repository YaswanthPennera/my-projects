import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Login from '../components/forms/Login'
import Register from '../components/forms/Register.jsx'
import LandingPage from './LandingPage';

const LoginPage =()=>{

  const [showLogin,setShowLogin]=useState(false);
  const [showRegister,setShowRegister]=useState(false);
  const [loggedIn,setLoggedIn]=useState(false);

  const showLoginHandler=()=>{
    setShowRegister(false);
    setShowLogin(true);
    setLoggedIn(false);
  }

  const showRegisterHandler=()=>{
    setShowLogin(false);
    setShowRegister(true);
    setLoggedIn(false);
  }

  const showWelcomeHandler=()=>{
    setShowLogin(false);
    setShowRegister(false);
    setLoggedIn(true);
  }

  if (loggedIn) {
    return <LandingPage />;
  }

  return (
    <div>
      <NavBar
        showLoginHandler={showLoginHandler}
        showRegisterHandler={showRegisterHandler}
        showAuthLinks={true}
        showLogoutButton={false}
      />
      {!showLogin && !showRegister && <h1>Please Login</h1>}
      {showLogin && <Login showWelcomeHandler={showWelcomeHandler}/>} 
      {showRegister && <Register showLoginHandler={showLoginHandler}/>}
    </div>
  )
}

export default LoginPage;