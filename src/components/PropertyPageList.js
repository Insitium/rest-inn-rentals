import React,{useState,useEffect} from 'react';

import PropertyPageItem from './PropertyPageItem';

const PropertyPageList = () => {

  // my state
  const [properties , setProperties] = useState([{
    id:"",
    type:"",
    title:"",
    location:"",
    bestSeller:false,
    price: "",
    img : null,
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
   <section id="property-list-header">
    <p>Property List</p>
    
    {properties.map(property=>( <PropertyPageItem id={property.id} key={property.id} type={property.type} title={property.title} bestSeller={property.bestSeller} image ={property.img} price={property.price} location={property.location} amenities={property.amenities} rules={property.rules} />))}
  
   </section>
  );
};

export default PropertyPageList;

