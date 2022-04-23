import React,{useEffect, useState} from 'react';
import Header from "../components/Header";
import Hero from '../components/Hero';
import PropertyType from '../components/PropertyType'
import BestSellerList from '../components/BestSellerList'
import Footer from '../components/Footer';

const HomePage = () => {
    
    return(
        <div className="grid grid-row-3" >
        <Header/>
            <main>
                <Hero/>
                <PropertyType/>
                <BestSellerList/>
            </main>
            <Footer/>
        </div>
    )
}

export default HomePage