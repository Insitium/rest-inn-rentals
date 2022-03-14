import React from 'react';
import { Link } from 'react-router-dom';

const PropertyItem = ({id, key, type, title,image,bestSeller,price,location,amenities, rules}) => {
    
  return  (
    
    <div className="property-card">
    
       
          <img  src={image} alt=""/>   
      

      <div className="propertyContent">
      <h3>{type}</h3>
          <p>${price} per night</p>
          <Link to = {`/property-type-page/${type}`}>
          <a  className="blog-post__cta">Details</a></Link>
      </div>
      
  </div>

  );
};

export default PropertyItem;

