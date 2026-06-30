import React from 'react'
import { useState } from 'react'

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("veg");
  const [bestseller, setBestseller] = useState(false);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const firmId = localStorage.getItem('firmId');
    if (!firmId) {
      alert("No firm selected. Please add a firm first.");
      return;
    }

    if (!productName || !price || !category || !description) {
      alert("Please fill all required fields.");
      return;
    }

    const parsedPrice = Number(price);
    if (Number.isNaN(parsedPrice) || parsedPrice <= 0) {
      alert("Please enter a valid price.");
      return;
    }

    const formData = new FormData();
    formData.append('productName', productName);
    formData.append('price', parsedPrice);
    formData.append('category', category);
    formData.append('bestSeller', bestseller ? 'true' : 'false');
    formData.append('description', description);
    if (image) {
      formData.append('image', image);
    }

    const response = await fetch(`http://localhost:4000/product/add-product/${firmId}`, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert("Product added successfully!");
      setProductName("");
      setPrice("");
      setCategory("veg");
      setBestseller(false);
      setDescription("");
      setImage(null);
    } else {
      const errorData = await response.json().catch(() => null);
      alert(`Failed to add product. ${errorData?.error ?? ''}`);
    }



  }

  return (
    < div className='add-product-page'>
    <div className='heading'>Add Product</div>
    <form className='add-product-info' onSubmit={handleSubmit}>
  <label>Product Name</label>
  <input 
    type="text" 
    placeholder="Enter Product Name" 
    value={productName}
    onChange={(e) => setProductName(e.target.value)}
  />

  <label>Price</label>
  <input 
    type="number" 
    placeholder="Enter Price" 
    value={price}
    onChange={(e) => setPrice(e.target.value)}
  />

  <label>Category</label>
  <select value={category} onChange={(e) => setCategory(e.target.value)}>
    <option value="veg">Veg</option>
    <option value="non-veg">Non-Veg</option>
  </select>

  <label>
    <input
      type="checkbox"
      checked={bestseller}
      onChange={(e) => setBestseller(e.target.checked)}
    />
    Bestseller
  </label>

  <label>Description</label>
  <input type="text" placeholder="Description" 
  value={description}
  onChange={(e)=> setDescription(e.target.value)} />

  <label>Firm Image</label>
  <input type="file" accept="image/*" 
  onChange={(e)=> setImage(e.target.files[0])}/>

  <button type="submit">Submit</button>
</form>

    </div>
  )
}

export default AddProduct