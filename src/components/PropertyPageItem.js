import React from 'react';
import { Link } from 'react-router-dom';

const PropertyPageItem = ({id, type, title,image,bestSeller,price}) => {
    
  return  (
    
    <div className="property-list-card">
    
      

      
      <Link to = {`/properties/${id}`}> 
          <img src={image} alt=""/>   
      </Link> 
      <div className="property-card-text">
          <h3>{title} property</h3>
          <h5>${price} per night</h5>
      </div>

  </div>

  );
};

export default PropertyPageItem;
