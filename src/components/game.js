import React from 'react';
import Nav from './nav';
import Header from './header';
import Feedback from './feedback';
import GuessList from './guessList';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: "Make your Guess!",
      guessList: [],
      correctAns: Math.floor(Math.random()*100)+1
    };
  }

  restartGame() {
    this.setState({
      feedback: "Make your Guess!",
      guessList: [],
      correctAns: Math.floor(Math.random()*100)+1
    });
  }

  makeGuess(guess) {

    if(isNaN(guess)) {
      this.setState({ feedback: "Please enter a valid number." });
      return;
    }

    const difference = Math.abs(guess - this.state.correctAns);

    let feedback;
    if (difference >= 50) {
      feedback = "You are Super Cold...";
    } else if (difference >= 30) {
      feedback = "You are Cold...";
    } else if (difference >= 10) {
      feedback = "You are Hot...";
    } else {
      feedback = "Correct!!!";
    }

    this.setState({
      feedback,
      guessList: [...this.state.guessList, guess]
    });
  }

  render() {
    return (
      <div className="game">
        <Nav onRestartGame={() => this.restartGame()}/>
        <Header />
        <Feedback
          msg={this.state.feedback}
          guess={this.state.guessList}
          makeGuess={(guess) => this.makeGuess(guess)}
        />
        <GuessList
          guesses={this.state.guessList}
        />
      </div>
    );
  }
}
