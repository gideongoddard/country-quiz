import React from 'react';
import './option.css'

class Option extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'Default',
        }

        this.handleSelection = this.handleSelection.bind(this);
    }

    componentDidUpdate() {
        if ((this.props.selected === this.props.code) && (this.state.status !== 'Selected')) {
            this.setState({
                status: 'Selected'
            })
        } else if ((this.props.selected !== this.props.code) && (this.state.status !== 'Default')) {
            this.setState({
                status: 'Default'
            })
        }
    }

    handleSelection() {
        this.props.onSelection(this.props.code);
    }

    render() {
        return (
            <div>
                <button className={`Option ${this.state.status}`} onClick={this.handleSelection}>{this.props.text}</button>
            </div>
        )
    }
}

export default Option;