import Header from "../components/Header";
import Footer from '../components/Footer';
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';


const PropertyDetailsPage = () => {

    
// my state
const [property , setProperty] = useState({
    id:0,
    type:"",
    title:"",
    location:"",
    bestSeller:false,
    price: 0,
    Rules:"",
    amenities:"",
    img : null,
    
  });

  const {id} = useParams();

  useEffect(()=>{

    const URL =`http://localhost:5000/properties/${id}`
    // AJAX request

    fetch(URL)
    .then(response=>response.json())

    .then(json=>{
     

      setProperty(json)
    })
    .catch(err=>console.log(err))

  }, [])

    
  
    return(
        <div className="grid" id="container">
        <Header/>
            <main>
                
    <div className="property-page-item">
    <div className="body-item">
    <div className="blog-post">
      <div className="blog-post__img">
          <img src={property.img} alt=""/>
      </div>
      <div className="blog-post__info">
        <div className="blog-post__date">
            <span>
            {property.location}
            
            </span>
            <span>
            <br/>
              <h3>{property.type} </h3>
            </span>
            <h1 className='blog-post___title'>{property.title}</h1>
            <p className="blog-post__text">
              Price:  $ {property.price}
              <br/>
              <br/>
              Amenities: {property.amenities}
              <br/>
              Rules: {property.Rules}
            </p>
        </div>
      </div>
    </div>
    </div>
    </div>
            </main>
        <Footer/>
        </div>
    )
}

export default PropertyDetailsPage