import React from 'react';
import './proceed.css';

function Proceed(props) {
    function handleUpdateQuestion() {
        props.onUpdateQuestion();
    }

    return (
        <button className="Proceed" onClick={handleUpdateQuestion}>Continue →</button>
    )
}

export default Proceed;