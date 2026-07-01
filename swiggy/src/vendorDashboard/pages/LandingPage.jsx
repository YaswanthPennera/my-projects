import React from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import AddFirm from '../components/forms/AddFirm'
import AddProduct from '../components/forms/AddProduct'
import AllProducts from '../components/AllProducts'
import { useState } from 'react'
import Welcome from '../components/Welcome'

const LandingPage = () => {
  const [showAddFirm,setShowAddFirm]=useState(false);
  const [showAddProduct,setShowAddProduct]=useState(false);
  const [showAllProducts,setShowAllProducts]=useState(false);
  const [showWelcome,setShowWelcome]=useState(true);

  const showAddFirmHandler=()=>{
    setShowAddProduct(false);
    setShowWelcome(false);
    setShowAddFirm(true);
    setShowAllProducts(false);
  }

   const showAddProductHandler=()=>{
    setShowAddFirm(false);
    setShowAddProduct(true);
    setShowWelcome(false);
    setShowAllProducts(false);

  }

  const showAllProductsHandler=()=>{
    setShowAddFirm(false);
    setShowAddProduct(false);
    setShowWelcome(false);
    setShowAllProducts(true);
  }

  const showWelcomeHandler=()=>{
    setShowAddFirm(false);
    setShowAddProduct(false);
    setShowAllProducts(false);
    setShowWelcome(true);
  }

  return (
    <>
    <div className="landing-section">
        <NavBar showAuthLinks={false} showLogoutButton={true} />
        <div className="collection">
          <SideBar showAddFirmHandler={showAddFirmHandler} showAddProductHandler={showAddProductHandler} showAllProductsHandler={showAllProductsHandler}/>
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