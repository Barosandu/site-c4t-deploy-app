import React, { Component } from "react";

class Spacer extends Component{
    render(){
        const {height} = this.props

        return(
            
            <div className="fit" style={{height: `${height}`}}>
            </div>
        )
    }
}

export default Spacer;