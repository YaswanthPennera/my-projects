import React from 'react'

function SideBar({showAddFirmHandler,showAddProductHandler,showAllProductsHandler}) {
  return (
    <>
    <div className="side-bar">
        <ul>
            <li onClick={showAddFirmHandler}>Add Firm</li>
            <li onClick={showAddProductHandler}>Add Product</li>
            <li onClick={showAllProductsHandler}>All Products</li>
            <li>User Details</li>
        </ul>
    </div>
    </>
  )
}

export default SideBar