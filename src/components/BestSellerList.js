import React,{useState,useEffect} from 'react';

import BestSellerItem from './BestSellerItem';

const PropertyType = () => {

  // my state
  const [properties , setProperties] = useState([{
    id:"",
    type:"",
    title:"",
    location:"",
    bestSeller:false,
    price: "",
    imageSrc : null,
    rules:"",
    amenities:""
  }]);


  useEffect(()=>{

    const uri = 'http://localhost:8082/properties'
    // AJAX request

    fetch(uri)
    .then(response=>response.json())

    .then(json=>{
     

      setProperties(json)
    })
    .catch(err=>console.log(err))

  }, [])
  return (
    <section id="section-property-list">
      <div className= "container">
      
          <h1>Best Seller</h1>

          <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">
   
          {properties.filter((property)=>{
            return property.bestSeller===true;
        }).map(property=>( <BestSellerItem id={property.id} key={property.id} type={property.type} title={property.title} bestSeller={property.bestSeller} image ={property.img} price={property.price} location={property.location} amenities={property.amenities} rules={property.rules}  />))}
     
              
  
          </div>

      </div>

    </section>

  );
};

export default PropertyType;
