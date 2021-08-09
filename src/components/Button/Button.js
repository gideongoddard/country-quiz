import './button.css';
import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.handleGetStarted = this.handleGetStarted.bind(this);
        this.handleRestart = this.handleRestart.bind(this);
    }

    handleGetStarted() {
        this.props.onGetStarted();
    }

    handleRestart() {
        this.props.onRestart();
    }

    render() {
        return (
            <button onClick={this.props.onRestart ? this.handleRestart : this.handleGetStarted} className="Button">{this.props.text}</button>
        )
    }
}

export default Button;