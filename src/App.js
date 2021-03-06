import React from 'react';
import sample from 'underscore/modules/sample.js';
import reject from 'underscore/modules/reject.js';
import './main.css';
import Box from './components/Box/Box';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      disabled: true,
      currentQuestion: 0,
      allCountries: [],
      questions: [],
      score: 0,
    }

    this.getStarted = this.getStarted.bind(this);
    this.updateScore = this.updateScore.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
    this.restart = this.restart.bind(this);
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(
        (result) => {
          this.setState({
            allCountries: result,
            disabled: false,
          });
        },
        (error) => {
          this.setState({
            error
          })
        }
      )
  }

  getStarted() {
    let unfiltered = this.state.allCountries;
    let filtered = reject(unfiltered, (item) => {
      return item.capital === "";
    });
    let answers = sample(filtered, 40);
    let one = answers.slice(0,4);
    let two = answers.slice(4,8);
    let three = answers.slice(8,12);
    let four = answers.slice(12,16);
    let five = answers.slice(16,20);
    let six = answers.slice(20,24);
    let seven = answers.slice(24,28);
    let eight = answers.slice(28,32);
    let nine = answers.slice(32,36);
    let ten = answers.slice(36);
    this.setState({
      questions: [
        one, two, three, four, five, six, seven, eight, nine, ten,
      ],
      currentQuestion: 1,
    });
  }

  updateScore() {
    let score = this.state.score;
    score++; 
    this.setState({
      score: score
    })
  }

  updateQuestion() {
    let currentQuestion = this.state.currentQuestion;
    currentQuestion++

    this.setState({
      currentQuestion: currentQuestion,
    })
  }

  restart() {
    this.setState({
      disabled: false,
      currentQuestion: 0,
      questions: [],
      score: 0,
    })
  }

  render() {
    const error = this.state.error;
    if (error) {
      return <div className="Error">Error: {error.message}</div>
    } else {
      return (
        <div className="App">
          <div className="Container">
            <Box currentQuestion={this.state.currentQuestion} questions={this.state.questions} disabled={this.state.disabled} onGetStarted={this.getStarted} score={this.state.score} onUpdateScore={this.updateScore} onUpdateQuestion={this.updateQuestion} onRestart={this.restart} />
          </div>
        </div>
      )
    }
  }
}

export default App;