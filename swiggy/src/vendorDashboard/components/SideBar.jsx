import React from 'react'

function SideBar({showAddFirmHandler,showAddProductHandler}) {
  return (
    <>
    <div className="side-bar">
        <ul>
            <li onClick={showAddFirmHandler}>Add Firm</li>
            <li onClick={showAddProductHandler}>Add Product</li>
            <li>All Products</li>
            <li>User Details</li>
        </ul>
    </div>
    </>
  )
}

export default SideBar