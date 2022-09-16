import React, { Component } from "react";

class Overlay extends Component {
    render(){
        return(
            <div className="my-overlay" style={{background: `${this.props.bcg}`, position: "absolute", width: "100%", height: "100%", filter: `${this.props.invert? "invert(1)": ""}`, backgroundAttachment: `${this.props.fixed ?  "fixed" : ""}`  }}>
                {this.props.children}
            </div>
        )
    }
}

export default Overlay