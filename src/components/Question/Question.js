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
        let getQuestionType = () => {
            let num = Math.floor(Math.random() * 2);
            if (num === 0) {
                return 'capital';
            } else {
                return 'flag';
            }
        }
        let questionType = getQuestionType();

        this.setState({
            options: options,
            answer: answer,
            questionStatus: 'new',
            selected: '',
            questionType: questionType,
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
                {
                    this.state.questionType === 'capital' ? <p>{this.state.answer.capital} is the capital of which country?</p> : (<><img class="flag" src={this.state.answer.flag} alt="Mystery flag" width="80" height="50" /><p style={{display: "inline-block", marginLeft: 10}}> is the flag of which country?</p></>)
                }
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