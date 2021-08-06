import React from 'react';
import './confirm.css'

class Confirm extends React.Component {
    constructor(props) {
        super(props);

        this.handleConfirm = this.handleConfirm.bind(this);
    }

    handleConfirm() {
        this.props.onConfirm();
    }

    render() {
        return (
            <button className="Confirm" onClick={this.handleConfirm}>Confirm</button>
        )
    }
}

export default Confirm;