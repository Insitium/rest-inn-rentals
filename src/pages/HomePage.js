import React,{useEffect} from 'react';
import Header from "../components/Header";
import Hero from '../components/Hero';
import PropertyType from '../components/PropertyType'
const HomePage = () => {
    return(
        <div className="grid grid-row-3" id="main-container">
            <Header/>
            <main>
                <Hero/>
                <PropertyType/>
            </main>
        </div>
    )
}

export default HomePage