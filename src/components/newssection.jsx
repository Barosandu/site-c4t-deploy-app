import React, { Component } from "react";
import Spacer from "./spacer";

class NewsSection extends Component {
    
    render(){
        const { title, type, img_link, text, justify, rev, imgstyle} =
            this.props;
        if(type == 1)
            return (
                <div className={"news-card col "}>
                    <div className="news-section col">
                        <div className="ns-img-container" style={{marginBottom: "25px"}}>
                            <img src= {img_link} style={imgstyle} crossOrigin="anonymous" className="fit contained-image"></img>
                        </div>
                        <div className="ns-body right">
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
                <div className={"news-section justify-center row " + rev}>
                    <div className="ns-img-container fit-to-side left ">
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

export default NewsSection;
