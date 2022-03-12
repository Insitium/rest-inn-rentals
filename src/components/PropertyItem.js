import React from 'react';
import { Link } from 'react-router-dom';

const PropertyItem = ({id, type, title,image,price}) => {
    
  return  (
    
    <div className="property-card">
    
      <Link to = {`/properties/${id}`}> 
          <img src={image} alt=""/>   
      </Link> 

      <div className="propertyContent">
          <h3>{type}</h3>
          <p>${price} per night</p>
      </div>

  </div>

  );
};

export default PropertyItem;
