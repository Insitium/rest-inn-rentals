import React from 'react';
import { Link } from 'react-router-dom';

const PropertyItem = ({id, title,image,price}) => {
  return  (

    <div className="property-card">

      <Link to = {`/properties/${id}`}> 
          <img src={image} alt=""/>   
      </Link> 

      <div className="resortContent">
          <h3>{title}</h3>
          <p>${price} per night</p>
      </div>

  </div>

  );
};

export default PropertyItem;
