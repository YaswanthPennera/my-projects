import React from 'react'

const NavBar = ({
  showLoginHandler,
  showRegisterHandler,
  showAuthLinks = true,
  showLogoutButton = false,
}) => {
  return (
    <div className='nav-section'>
      <div className="company">
        Vendor Dashboard
      </div>
      <div className="user-Authentication">
        {showAuthLinks && (
          <>
            <span onClick={showLoginHandler}>Login</span>
            <span onClick={showRegisterHandler}>Register</span>
          </>
        )}
        {showLogoutButton && (
          <span onClick={() => {
            localStorage.removeItem('loginToken');
            localStorage.removeItem('firmId');
            window.location.reload();
          }}>
            Logout
          </span>
        )}
      </div>
    </div>
  )
}

export default NavBar