import React from 'react';
import './box.css';
import Intro from '../Intro/Intro'
import Question from '../Question/Question'

function Box(props) {
    if (props.currentQuestion === 0) {
        return (
            <div className="Box">
                <Intro disabled={props.disabled} onGetStarted={props.onGetStarted} />
            </div>
        )
    } else if (props.currentQuestion) {
        return (
            <div className="Box">
                <Question currentQuestion={props.currentQuestion} questions={props.questions} />
            </div>
        )
    }
}

export default Box;