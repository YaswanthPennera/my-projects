import React from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register.jsx'
import AddFirm from '../components/forms/AddFirm'
import AddProduct from '../components/forms/AddProduct'
import AllProducts from '../components/AllProducts'
import { useState } from 'react'
import Welcome from '../components/Welcome'

const LandingPage = () => {
  const [showLogin,setShowLogin]=useState(false);
  const [showRegister,setShowRegister]=useState(false)
  const [showAddFirm,setShowAddFirm]=useState(false);
  const [showAddProduct,setShowAddProduct]=useState(false);
  const [showAllProducts,setShowAllProducts]=useState(false);
  const [showWelcome,setShowWelcome]=useState(true);

  const showLoginHandler=()=>{
    setShowRegister(false);
    setShowAddFirm(false);
    setShowAddProduct(false);
    setShowAllProducts(false);
    setShowLogin(true);
    setShowWelcome(false);
  }

  const showRegisterHandler=()=>{
    setShowLogin(false);
    setShowAddFirm(false);
    setShowAddProduct(false);
    setShowRegister(true);
    setShowWelcome(false);
    setShowAllProducts(false);
  }

  const showAddFirmHandler=()=>{
    setShowRegister(false);
    setShowLogin(false);
    setShowAddProduct(false);
    setShowWelcome(false);
    setShowAddFirm(true);
    setShowAllProducts(false);
  }

   const showAddProductHandler=()=>{
    setShowRegister(false);
    setShowLogin(false);
    setShowAddFirm(false);
    setShowAddProduct(true);
    setShowWelcome(false);
    setShowAllProducts(false);

  }

  const showAllProductsHandler=()=>{
    setShowRegister(false);
    setShowLogin(false);
    setShowAddFirm(false);
    setShowAddProduct(false);
    setShowWelcome(false);
    setShowAllProducts(true);
  }

  const showWelcomeHandler=()=>{
    setShowRegister(false);
    setShowLogin(false);
    setShowAddFirm(false);
    setShowAddProduct(false);
    setShowAllProducts(false);
    setShowWelcome(true);
  }

  return (
    <>
    <div className="landing-section">
        <NavBar showLoginHandler={showLoginHandler}  showRegisterHandler={showRegisterHandler}/>
        <div className="collection">
          <SideBar showAddFirmHandler={showAddFirmHandler} showAddProductHandler={showAddProductHandler} showAllProductsHandler={showAllProductsHandler}/>
          {showLogin && <Login showWelcomeHandler={showWelcomeHandler}/>}
            {showRegister && <Register showLoginHandler={showLoginHandler}/> }
            {showAddFirm && <AddFirm/>}
          { showAddProduct && <AddProduct/>}
          { showWelcome && <Welcome/>}
          {showAllProducts && <AllProducts/>}
        </div>
      
    </div>
    </>
  )
}

export default LandingPage