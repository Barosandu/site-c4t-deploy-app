import React, { Component } from "react";
import NavBar from "./navbar";
import NewsSection  from "./newssection";
import HeadQuote from "./headquote";
import Spacer from "./spacer";
import { ParallaxProvider } from 'react-scroll-parallax';
import CarouselFestival from "./carouselfestival"


class ContactPage extends Component{
    render(){
        return(
            <div className="buddy full col center justify-center contact-overlay">
                
                <div className="handwrite contact-cascade txt-dark-color bright txt-white-color">
                    <li>
                        <i className="fa fa-instagram"></i>
                        <a href="#insta">classic.forteens</a>
                    </li>
                    <li>
                        <i className="fa fa-facebook"></i>
                        <a href="#fb">classic.4teens@fb</a>
                    </li>
                </div>
                <div className="c4t fit-to-side left">
                            <img className="main" src="C4TW.png"></img>
                </div>
            </div>
        )
    }
}

export default ContactPage;