import React, {Component} from 'react'

class CoordinatesButton extends Component {

    handleOnClick = (evt) => {
        this.props.onReceiveCoordinates([evt.clientX, evt.clientY])
    }

    render() {
        return (
            <button onClick={this.handleOnClick}>Coordinates Button</button>
        )
    }
}
export default CoordinatesButton