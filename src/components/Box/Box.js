import React from 'react';
import './box.css';
import Intro from '../Intro/Intro'
import Question from '../Question/Question'
import Results from '../Results/Results';

function Box(props) {
    if (props.currentQuestion === 0) {
        return (
            <div className="Box">
                <Intro disabled={props.disabled} onGetStarted={props.onGetStarted} />
            </div>
        )
    } else if (props.currentQuestion > 10) {
        return (
            <div className="Box">
                <Results score={props.score} onRestart={props.onRestart} />
            </div>
        )
    } else if (props.currentQuestion) {
        return (
            <div className="Box">
                <Question key={props.currentQuestion} currentQuestion={props.currentQuestion} questions={props.questions} score={props.score} onUpdateScore={props.onUpdateScore} onUpdateQuestion={props.onUpdateQuestion} />
            </div>
        )
    }
}

export default Box;