import React, { Component } from "react";
import { Parallax } from "react-scroll-parallax";
import Counter from "./counter";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class CarouselFestival extends Component{
    render(){
        return(<div>
            <Carousel width={"31vw"} dynamicHeight={true}>
                <div>
                    <img src="/Festival/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="/Festival/2.jpeg"  />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="/Festival/3.jpeg"  />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="/Festival/7.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                
            </Carousel>
        </div>)
    }
}

export default CarouselFestival;