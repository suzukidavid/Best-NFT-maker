import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper container">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src="img/home/logo/2.webp" alt="" />
                    
                </div>
                <div>
                    <img src="img/home/logo/4.webp" alt=""/>
                    
                </div>
                <div>
                    <img src="img/home/logo/6.webp" alt=""/>
                    
                </div>
                <div>
                    <img src="img/home/logo/7.webp" alt=""/>
                    
                </div>
                <div>
                    <img src="img/home/logo/3.jpg" alt=""/>
                    
                </div>
            </Carousel>
        </div>
    );
}