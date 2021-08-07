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
        if ((this.props.answer.alpha2Code === this.props.code) && (this.props.questionStatus === 'confirmed') && (this.state.status !== 'Correct')) {
            this.setState({
                status: 'Correct'
            })
        } else if ((this.props.selected === this.props.code) && (this.props.questionStatus === 'chosen') && (this.state.status !== 'Selected')) {
            this.setState({
                status: 'Selected'
            })
        } else if ((this.props.selected !== this.props.code) && (this.props.questionStatus === 'chosen') && (this.state.status !== 'Default')) {
            this.setState({
                status: 'Default'
            })
        } else if ((this.props.selected === this.props.code) && (this.props.selected !== this.props.answer.answer2Code) && (this.props.questionStatus === 'confirmed') && (this.state.status !== 'Wrong')) {
            this.setState({
                status: 'Wrong'
            })
        }
    }

    handleSelection() {
        this.props.onSelection(this.props.code);
    }

    render() {
        return (
            <div>
                <button className={`Option ${this.state.status}`} onClick={this.props.questionStatus === 'new' ? this.handleSelection : null}>{this.props.text}</button>
            </div>
        )
    }
}

export default Option;