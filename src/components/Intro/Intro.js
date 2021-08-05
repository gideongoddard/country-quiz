import './intro.css';
import World from './undraw_Around_the_world_re_n353.png'
import Button from '../Button/Button'
import React from 'react';

class Intro extends React.Component {
    render() {
        return (
            <div>
                <img className="World" src={World} alt="Around the world illustration" width="500" height="343" />
                <h2 className="Welcome">Welcome to the biggest, baddest country quiz you ever did play!</h2>
                <p className="Intro">You'll face 10 questions. They could be about any country on Earth so let's hope you've done your homework...</p>
                <Button text="Let's get started!" countries={this.props.countries} disabled={this.props.disabled} onGetStarted={this.props.onGetStarted} />
            </div>
        );
    }
}

export default Intro;