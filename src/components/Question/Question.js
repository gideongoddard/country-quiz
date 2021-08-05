import './question.css';
import Option from '../Option/Option'
import React from 'react';
import Confirm from '../Confirm/Confirm'

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [],
            answer: '',
            selected: '',
        }
        this.handleSelection = this.handleSelection.bind(this);
    }

    componentDidMount() {
        let currentQuestion = this.props.currentQuestion -1;
        let options = this.props.questions[currentQuestion];
        let num = Math.floor(Math.random() * options.length);
        let answer = options[num];
        this.setState({
            options: options,
            answer: answer,
        })
    }

    handleSelection(key) {
        this.setState({
            selected: key
        })
    }

    render() {
    
        return (
            <div>
                <h2>Question {this.props.currentQuestion}</h2>
                <p>{this.state.answer.capital} is the capital city of which country?</p>
                {this.state.options.map(option => (
                    <Option key={option.alpha2Code} code={option.alpha2Code} selected={this.state.selected} text={option.name} onSelection={this.handleSelection} />
                ))}
                <>
                    {
                        this.state.selected ? (
                            <Confirm />
                        ) : (
                            <></>
                        )
                    }
                </>
            </div>
        )
    }
}

export default Question;