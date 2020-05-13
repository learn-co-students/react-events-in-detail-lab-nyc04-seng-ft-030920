import React, {Component} from 'react'

class DelayedButton extends Component {

    handleOnClick = (evt) => {
        evt.persist()
        window.setTimeout(this.props.onDelayedClick(evt), this.props.delay)
    }

    render() {
        return (
            <button onClick={this.handleOnClick}>Delayed Button</button>
        )
    }
}

export default DelayedButton