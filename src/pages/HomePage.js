import React,{useEffect} from 'react';
import Header from "../components/Header";
import Hero from '../components/Hero';

const HomePage = () => {
    return(
        <div className="grid grid-row-3" id="main-container">
            <Header/>
            <main>
                <Hero/>
            </main>
        </div>
    )
}

export default HomePage