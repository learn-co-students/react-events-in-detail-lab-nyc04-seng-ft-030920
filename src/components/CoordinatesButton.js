import React, { Component } from "react";

export default class CoordinateButton extends Component {
    handleClick = (evt) => {
        this.props.onReceiveCoordinates([evt.clientX, evt.clientY])
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick}/>
            </div>
        )
    }
}