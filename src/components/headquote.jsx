import React, { Component } from "react";
import { Parallax } from "react-scroll-parallax";
import Counter from "./counter";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


class HeadQuote extends Component{
    render(){
        const {quote, author, recommend} = this.props
        return(
            <div>
                <Parallax speed={-10}>
                    <div style={{transform:"translateY(-0px)"  , zIndex: 0,padding: "20px", paddingTop: "50px", paddingBottom: "50px", minHeight: "400px", height: "101vh", maxHeight:"101vh"}} className="violin_mp xtrawide quote-of-the-day txt-black-color bcg-tertiary-color fit col center justify-center">
                        <div className="c4t fit-to-side left">
                            <img className="main" src="C4TW.png"></img>
                        </div>
                        <div className="quote-wrap fit txt-white-color handwrite bright">
                            <h4 className="quote-text txt-white-color">{quote}</h4>
                            <h5 className="quote-author txt-white-color">~ {author}</h5>
                        </div>
                    </div>
                </Parallax>
                
                <div style={{padding: "20px", zIndex: 3, position: "relative"}} className="xtrawide quote-of-the-day txt-white-color bcg-black-color fit row justify-center">
                    <div className="rec-wrap fit row center justify-center">
                        {//<i className="fa fa-music fa-lg m-2" aria-hidden="true" /> 
                        }
                        <h5 className="rec-text">C4T recomanda: {recommend}</h5>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default HeadQuote;