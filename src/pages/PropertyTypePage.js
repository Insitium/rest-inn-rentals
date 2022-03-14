import Header from "../components/Header";
import Footer from '../components/Footer';
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import PropertyItem from "../components/PropertyItem";
import PropertyPageItem from "../components/PropertyPageItem";



const PropertyTypePage = () => {

    
// my state
const [properties , setProperties] = useState({
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

let params = useParams();

  useEffect(()=>{

    const URL ="http://localhost:5000/properties"
    // AJAX request

    fetch(URL)
    .then((response)=>response.json())

    .then(json=>{
     

      setProperties(json)
    })
    .catch((err)=>console.log(err));

  }, [])

    
  
  return(
    <div className="grid" id="container">
    <Header/>
        <main>
        <section id="section-property-list">
        <div className= "container">
        
            <h1>Property Type : {params.type}</h1>

            <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">
            {properties.filter((property)=>{
                if(property.type === params.type){
                    return property;
                }else{
                    return null;
                }
            }).map((property)=>(<PropertyItem
                id={property.id} key={property.id} type={property.type} title={property.title} bestSeller={property.bestSeller} image ={property.img} price={property.price} location={property.location} amenities={property.amenities} rules={property.Rules}/>))
                }
            </div>
          </div>
          </section>
        </main>
    <Footer/>
    </div>
    )
}

export default PropertyTypePage
// {properties.map(property=>( <PropertyPageItem id={property.id} key={property.id} type={property.type} title={property.title} bestSeller={property.bestSeller} image ={property.img} price={property.price} location={property.location} amenities={property.amenities} rules={property.rules} />))}