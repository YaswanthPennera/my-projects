import React from 'react'

const NavBar = ({showLoginHandler,showRegisterHandler}) => {
  return (
    <div className='nav-section'>
        <div className="company">
            Vendor Dashboard
        </div>
        <div className="user-Authentication">
            <span onClick={showLoginHandler}>Login</span>
            <span onClick={showRegisterHandler}>Register</span>
        </div>

    </div>
  )
}

export default NavBar