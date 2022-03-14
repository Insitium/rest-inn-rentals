import React from 'react';
import { Link } from 'react-router-dom';

const PropertyDetailsCard = ({id, key, type, title,image,bestSeller,price,location,amenities, rules}) => {
  var variable="";
  const bestSellerCheck = () => {
    if(bestSeller===true){
      variable = "Best Seller";
    }
    return variable;
  }

  return  (
    <div className="property-page-item">
    <div className="body-item">
    <div className="blog-post">
      <div className="blog-post__img">
          <img src={image} alt=""/>
      </div>
      <div className="blog-post__info">
        <div className="blog-post__date">
            <span>
            {location}
            </span>
            <span>
            <br/>
              <h3>{type} </h3>
            </span>
            <h1 className='blog-post___title'>{title}</h1>
            <p className="blog-post__text">
              Price:  $ {price}
              <br/>
              {bestSellerCheck()}
              <br/>
              Amenities: {amenities}
              <br/>
              Rules: {rules}
            </p>
        </div>
      </div>
    </div>
    </div>
    </div>

    

  );
};

export default PropertyDetailsCard;


