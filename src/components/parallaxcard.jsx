import React, { Component } from "react";
import NavBar from "./navbar";
import NewsSection  from "./newssection";
import HeadQuote from "./headquote";
import Spacer from "./spacer";
import { ParallaxProvider } from 'react-scroll-parallax';
import CarouselFestival from "./carouselfestival"
import { Chrono } from "react-chrono";

class ParallaxCard extends Component{
    render(){
        const { title, type, img_link, text, justify, rev} =
            this.props;
        if(type == 1)
            return (
                <div className={"ntews-card col " + rev}>
                    <div className="news-section col">
                        <div className="ns-img-container">
                            <img src= {img_link} crossOrigin="anonymous" className="fit contained-image"></img>
                        </div>
                        <div className="ns-body fit-to-side right">
                            <div className="ns-title title" >
                                {title}
                            </div>
                            <div className="ns-text">
                                {text}
                            </div>
                        </div>
                        
                    </div>
                    <Spacer height="50px" />

                </div>
                
            )
        else return (
            <div className="news-card col">
                <div className={"news-section row " + rev}>
                    <div className="ns-img-container fit-to-side left">
                        <img src= {img_link} crossOrigin="anonymous" className="fit contained-image"></img>
                    </div>
                    <div className={"ns-body fit-to-side right with-spacer col justify-" + justify}>
                        <div className="ns-title title" >
                            {title}
                        </div>
                        <div className="ns-text">
                            {text}
                        </div>
                    </div>
                    
                </div>
                <Spacer height="50px" />
            </div>
            
        )
    }
}