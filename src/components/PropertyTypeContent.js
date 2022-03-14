import React from 'react';
import { Link } from 'react-router-dom';

const PropertyTypeContent = ({id, key, type, title,image,bestSeller,price,location,amenities, rules}) => {
    
  return  (
    
    <div className="property-card">
    
       
          <img  src={image} alt="srgdvfh"/>   
      

      <div className="propertyContent">
      <h3>{title}</h3>
          <p>{price} per night</p>
         
      </div>
      
  </div>

  );
};

export default PropertyTypeContent;

