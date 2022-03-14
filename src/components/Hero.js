import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/img/one.jpg';
import img2 from '../assets/img/two.jpg';
import img3 from '../assets/img/three.jpg';
import img4 from '../assets/img/four.jpg';
import img5 from '../assets/img/five.jpg';


const Hero = () => {
    return (
        <Carousel className='carousel hero' >
            <div>
                <img src={img1} />
                <p className="legend">Property 1</p>
            </div>
            <div>
                <img src={img2} />
                <p className="legend">Property 2</p>
            </div>
            <div>
                <img src={img3} />
                <p className="legend">Property 3</p>
            </div>
            <div>
                <img src={img4} />
                <p className="legend">Property 4</p>
            </div>
            <div>
                <img src={img5} />
                <p className="legend">Property 5</p>
            </div>
            
        </Carousel>
    )
}

export default Hero;