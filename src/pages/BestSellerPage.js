import Header from "../components/Header";
import Footer from '../components/Footer';
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import PropertyItem from "../components/PropertyItem";
import PropertyPageItem from "../components/PropertyPageItem";
import PropertyTypeContent from "../components/PropertyTypeContent";


const BestSellerPage = () => {

    
// my state
const [properties , setProperties] = useState([{
    id:0,
    type:"",
    title:"",
    location:"",
    bestSeller:false,
    price: 0,
    Rules:"",
    amenities:"",
    img : null,
    
  }]);

let params = useParams();

  useEffect(()=>{
    const URL ="http://localhost:5000/properties"
    fetch(URL).then((response)=>response.json()).then((json) =>{
        let a = json.filter((element)=>element.bestSeller===true)
        setProperties(a);
    })
  }, [])
  
  return(
    <div className="grid" id="container">
    <Header/>
        <main>
        <section id="section-property-list">
        <div className= "container">
            <h1>Property Type : {params.type}</h1>
            {
                properties.map((element)=>{
                    return(
                        <PropertyTypeContent id={element.id} key={element.id} type={element.type} title={element.title} bestSeller={element.bestSeller} image ={element.img} price={element.price} location={element.location} amenities={element.amenities} rules={element.Rules}/>
                    )
                })
            }
            <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">           
            </div>
          </div>
          </section>
        </main>
    <Footer/>
    </div>
    )
}
export default BestSellerPage
