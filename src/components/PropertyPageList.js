import React,{useState,useEffect} from 'react';

import PropertyPageItem from './PropertyPageItem';

const PropertyPageList = () => {

  // my state
  const [properties , setProperties] = useState([{
    id:0,
    type:"",
    title:"",
    bestSeller:false,
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
   <div>
    
   </div>

  )
};

export default PropertyPageList;


// <section id="property-listing-page">
// <div >

//     <h1>Property Listing</h1>

//     <div className="grid-row-gap-2">
//     {properties.map(property=>( <PropertyPageItem id={property.id} key={property.id} type={property.type} title={property.title} bestSeller={property.bestSeller} image ={property.img} price={property.price}  />))}
    
        

//     </div>

// </div>

// </section>