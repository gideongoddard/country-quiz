import './question.css';
import Option from '../Option/Option'
import React from 'react';
import Confirm from '../Confirm/Confirm';
import Proceed from '../Proceed/Proceed';

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questionStatus: 'new',
            options: [],
            answer: '',
            selected: '',
        }
        this.getQuestion = this.getQuestion.bind(this);
        this.handleSelection = this.handleSelection.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
    }

    componentDidMount() {
        this.getQuestion();
    }

    getQuestion() {
        let currentQuestion = this.props.currentQuestion -1;
        let options = this.props.questions[currentQuestion];
        let num = Math.floor(Math.random() * options.length);
        let answer = options[num];
        this.setState({
            options: options,
            answer: answer,
            questionStatus: 'new',
            selected: '',
        })
    }

    handleSelection(key) {
        this.setState({
            questionStatus: 'chosen',
            selected: key,
        })
    }

    handleConfirm() {
        let answerCode = this.state.answer.alpha2Code;
        let selection = this.state.selected;

        if (answerCode === selection) {
            this.setState({
                selected: '',
            });
            this.props.onUpdateScore();
        }
        this.setState({
            questionStatus: 'confirmed',
        })
    }

    render() {
    
        return (
            <div>
                <h2>Question {this.props.currentQuestion}</h2>
                <p>{this.state.answer.capital} is the capital city of which country?</p>
                {this.state.options.map(option => (
                    <Option key={option.alpha2Code} code={option.alpha2Code} selected={this.state.selected} text={option.name} onSelection={this.handleSelection} answer={this.state.answer} questionStatus={this.state.questionStatus} correct={this.state.correct} />
                ))}
                <>
                    {
                        this.state.questionStatus === 'chosen' ? (
                            <Confirm onConfirm={this.handleConfirm} />
                        ) : (
                            <></>
                        )
                    }
                    {
                        this.state.questionStatus === 'confirmed' ? (
                            <Proceed currentQuestion={this.props.currentQuestion} onUpdateQuestion={this.props.onUpdateQuestion} />
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