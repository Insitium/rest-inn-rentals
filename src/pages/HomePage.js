import React,{useEffect} from 'react';
import Header from "../components/Header";
import Hero from '../components/Hero';
import PropertyType from '../components/PropertyType'
import BestSellerList from '../components/BestSellerList'
const HomePage = () => {
    return(
        <div className="grid grid-row-3" >
        <Header/>
            <main>
                <Hero/>
                <PropertyType/>
                <BestSellerList/>
            </main>
        </div>
    )
}

export default HomePage