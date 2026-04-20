import React, { useState } from 'react'

const AddFirm = () => {
  const ApiUrl = "http://localhost:4000";
  const [firmName, setFirmName] = useState("");
  const [area, setArea] = useState("");
  const [offer, setOffer] = useState("");
  const [category, setCategory] = useState([]);
  const [region, setRegion] = useState([]);
  const [image, setImage] = useState(null);

  const handleCategoryChange = (value) => {
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const handleRegionChange = (value) => {
    setRegion((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const handleFirstSubmit = async (e) => {
    e.preventDefault();
    const loginToken = localStorage.getItem('loginToken');
    
    if (!loginToken) {
      console.error("User not Authenticated");
      alert("Please login first");
      return;
    }

    try {
      const formData = new FormData();
      formData.append('firmName', firmName);
      formData.append('area', area);
      formData.append('offer', offer);
      category.forEach((value) => formData.append('category', value));
      region.forEach((value) => formData.append('region', value));
      if (image) {
        formData.append('image', image);
      }

      const response = await fetch(`${ApiUrl}/firm/add-firm/`, {
        method: "POST",
        headers: {
          "token": loginToken
        },
        body: formData
      });

      const data = await response.json();
      
      if (response.ok) {
        alert("Firm added successfully!");
        setFirmName("");
        setArea("");
        setOffer("");
        setCategory([]);
        setRegion([]);
        setImage(null);
      } else {
        alert("Error: " + data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className='add-firm-page'>
      <div className='heading'>Add Firm</div>
      <form className='add-firm-info' onSubmit={handleFirstSubmit}>
        <label>Firm Name:</label>
        <input 
          type="text" 
          placeholder="Enter Firm Name" 
          value={firmName} 
          onChange={(e) => setFirmName(e.target.value)} 
          required
        />

        <label>Area:</label>
        <input 
          type="text" 
          placeholder="Enter Area" 
          value={area} 
          onChange={(e) => setArea(e.target.value)} 
          required
        />

        <div className='inp-checkbox'>
          <div><label>Category:</label></div>
          <div className='checkbox-div'>
            <div className='checkbox'>
              <label htmlFor="veg">Veg</label>
              <input 
                type="checkbox" 
                id="veg"
                value="veg" 
                checked={category.includes("veg")}
                onChange={() => handleCategoryChange("veg")}
              />
            </div>
            <div className='checkbox'>
              <label htmlFor="nonveg">NonVeg</label>
              <input 
                type="checkbox" 
                id="nonveg"
                value="nonveg" 
                checked={category.includes("nonveg")}
                onChange={() => handleCategoryChange("nonveg")}
              />
            </div>
          </div>
        </div>

        <div className='inp-checkbox'>
          <div><label>Region:</label></div>
          <div className='checkbox-div'>
            <div className='checkbox'>
              <label htmlFor="southIndian">South Indian</label>
              <input 
                type="checkbox" 
                id="southIndian"
                value="South-Indian" 
                checked={region.includes("South-Indian")}
                onChange={() => handleRegionChange("South-Indian")}
              />
            </div>
            <div className='checkbox'>
              <label htmlFor="northIndian">North Indian</label>
              <input 
                type="checkbox" 
                id="northIndian"
                value="North-Indian" 
                checked={region.includes("North-Indian")}
                onChange={() => handleRegionChange("North-Indian")}
              />
            </div>
            <div className='checkbox'>
              <label htmlFor="chinese">Chinese</label>
              <input 
                type="checkbox" 
                id="chinese"
                value="chinese" 
                checked={region.includes("chinese")}
                onChange={() => handleRegionChange("chinese")}
              />
            </div>
            <div className='checkbox'>
              <label htmlFor="bakery">Bakery</label>
              <input 
                type="checkbox" 
                id="bakery"
                value="Bakery" 
                checked={region.includes("Bakery")}
                onChange={() => handleRegionChange("Bakery")}
              />
            </div>
          </div>
        </div>

        <label>Offer:</label>
        <input 
          type="text" 
          placeholder="Enter Offer Details" 
          value={offer} 
          onChange={(e) => setOffer(e.target.value)} 
        />

        <label>Firm Image:</label>
        <input 
          type="file" 
          accept="image/*" 
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddFirm