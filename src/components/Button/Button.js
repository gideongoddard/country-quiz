import './button.css';
import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.handleGetStarted = this.handleGetStarted.bind(this);
    }

    handleGetStarted() {
        this.props.onGetStarted();
    }

    render() {
        return (
            <button onClick={this.handleGetStarted} className="Button">{this.props.text}</button>
        )
    }
}

export default Button;