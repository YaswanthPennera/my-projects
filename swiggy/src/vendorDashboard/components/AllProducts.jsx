import React, { useState, useEffect } from 'react'

const AllProducts = () => {
  const [productsData, setProductsData] = useState({ restrauntName: '', products: [] });
  const firmId = localStorage.getItem('firmId');

  useEffect(() => {
    if (!firmId) return;

    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:4000/product/${firmId}/products`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => null);
          console.error('Error fetching products:', errorData?.error || response.statusText);
          setProductsData({ restrauntName: '', products: [] });
          return;
        }

        const data = await response.json();
        console.log('Products fetched:', data);
        setProductsData(data || { restrauntName: '', products: [] });
      } catch (error) {
        console.error('Error fetching products:', error);
        setProductsData({ restrauntName: '', products: [] });
      }
    };

    fetchProducts();
  }, [firmId]);


  return (
    <>
      <div className='all-products'>
        <h2>All Products</h2>
        {productsData.restrauntName && <p>Restaurant: {productsData.restrauntName}</p>}
      </div>
      <div className='product-list'>
        {productsData.products && productsData.products.length > 0 ? (
          <table className='products-table'>
            <thead>
              <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {productsData.products.map((product) => (
                <tr key={product._id} className='product-row'>
                  <td className='product-image'>
                    {product.image ? (
                      <img 
                        src={`http://localhost:4000/uploads/${product.image}`} 
                        alt={product.productName || product.name} 
                      />
                    ) : (
                      <div className='placeholder-image'>
                        <span>No Image</span>
                      </div>
                    )}
                  </td>
                  <td>{product.productName || product.name}</td>
                  <td>{product.description}</td>
                  <td className='price'>${product.price ? Number(product.price).toFixed(2) : 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </>
  );
};

export default AllProducts;