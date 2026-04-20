import React from 'react'

const AddProduct = () => {
  return (
    < div className='add-product-page'>
    <div className='heading'>Add Product</div>
    <form className='add-product-info'>
  <label>Product Name</label>
  <input type="text" placeholder="Enter Product Name" />

  <label>Category</label>
  <input type="text" />

  <label>Bestseller</label>
  <input type="text" />

  <label>Description</label>
  <input type="text" placeholder="Description" />

  <label>Firm Image</label>
  <input type="file" accept="image/*" />

  <button type="submit">Submit</button>
</form>

    </div>
  )
}

export default AddProduct