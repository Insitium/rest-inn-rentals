import React from 'react';
import { Link } from 'react-router-dom';

const PropertyItem = ({id, key, type, title,image,bestSeller,price,location,amenities, rules}) => {
    
  return  (
    
    <div className="property-card">
    
      <Link to = {`/properties/${id}`}> 
          <img src={image} alt=""/>   
      </Link> 
    
      <div className="propertyContent">
          <h3>{title} property</h3>
          <p>${price} per night</p>
          <Link className="blog-post__cta" to = {"/properties/bestSeller"}>
         Details</Link>
          </div>
   
      

  </div>

  );
};

export default PropertyItem;
