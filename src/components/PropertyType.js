import React,{useState,useEffect} from 'react';

import PropertyItem from './PropertyItem';

const PropertyType = () => {

  // my state
  const [properties , setProperties] = useState([{
    id:0,
    type:"",
    title:"",
    price: 0,
    imageSrc : null
  }]);


  useEffect(()=>{

    const URL = 'http://localhost:5000/properties'
    // AJAX request

    fetch(URL)
    .then(response=>response.json())

    .then(json=>{
     

      setProperties(json)
    })
    .catch(err=>console.log(err))

  }, [])
  return (
    <section id="section-property-list">
      <div className= "container">
      
          <h1>Property Type</h1>

          <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">
          {properties.filter((property)=>{
            return property.id<=4;
        }).map(property=>( <PropertyItem id={property.id} key={property.id} type={property.type} title={property.title} image ={property.img} price={property.price}  />))}
          
              
  
          </div>

      </div>

    </section>

  );
};

export default PropertyType;
