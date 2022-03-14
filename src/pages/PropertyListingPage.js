import React,{useEffect} from 'react';
import Header from "../components/Header";
import Hero from '../components/Hero';
import PropertyType from '../components/PropertyType'
import BestSellerList from '../components/BestSellerList'
import PropertyPageList from '../components/PropertyPageList'
import Footer from '../components/Footer';

const PropertyListingPage = () => {
    return(
        <div className="grid" id="container">
        <Header/>
            <main>
                <PropertyPageList/>
            </main>
        <Footer/>
        </div>
    )
}

export default PropertyListingPage