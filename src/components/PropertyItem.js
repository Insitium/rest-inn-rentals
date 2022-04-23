import React from 'react';
import { Link } from 'react-router-dom';

const PropertyItem = (props) => {
    
  return  (
    
    <div className="property-card">
    
       
          <img  src={props.image} alt=""/>   
      

      <div className="propertyContent">
      <h3>{props.type}</h3>
          <p>${props.price} per night</p>
          <Link className="blog-post__cta"to = {`/properties/title-type/${props.type}`}>
         Details</Link>
      </div>
      
  </div>

  );
};

export default PropertyItem;

