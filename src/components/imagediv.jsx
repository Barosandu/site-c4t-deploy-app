import React, { Component } from "react";
import { Parallax } from "react-scroll-parallax";

class ImageDiv extends Component{
    render(){
        if(this.props.parallax != 0)
        return(
            <Parallax speed={this.props.parallax}>
                <div style={{position: "relative" ,display: "flex", flexDirection: this.props.flexdirection, justifyContent: "center", alignItems: "center",background: this.props.bcg, backgroundPosition: "center center", backgroundSize: "cover", backgroundRepeat: "no-repeat", width: "100%", maxWidth: this.props.maxWidth, height: this.props.height, backgroundAttachment: `${this.props.fixed ?  "fixed" : ""}`}}>
                    {this.props.children}
                </div>
            </Parallax>
        ) 
        else
        return(
                <div style={{position: "relative" , display: "flex", flexDirection: this.props.flexdirection, justifyContent: "center", alignItems: "center",background: this.props.bcg, backgroundPosition: "center center", backgroundSize: "cover", backgroundRepeat: "no-repeat", width: "100%", maxWidth: this.props.maxWidth, height: this.props.height,  backgroundAttachment: `${this.props.fixed ?  "fixed" : ""}` }}>
                    {this.props.children}
                </div>
        ) 
    }
}

export default ImageDiv