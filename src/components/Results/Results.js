import React from 'react'
import Winners from "./undraw_winners.svg"
import Button from "../Button/Button"
import './results.css'

function Results(props) {
    return (
        <div className="Results">
            <img className="Winners" src={Winners} alt="Around the world illustration" width="500" height="343" />
            <h2 className="Curtain">That's it, the show's over folks!</h2>
            <p className="Announcement">You scored... <span className="Score">{props.score} / 10</span></p>
            {
                props.score > 6 ? <p className="Line">Nice work, you really do know your stuff!</p> : <p className="Line">Oh dear. You've let yourself down and I'm deeply ashamed of you. Do better.</p>
            }
            <Button text="Start again" onRestart={props.onRestart} />
        </div>
    )
}

export default Results;