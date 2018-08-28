import React from 'react';
import './feedback.css'

export default class Feedback extends React.Component{
  onSubmit(event) {
    event.preventDefault();
    this.props.makeGuess(this.guessInput.value);
    this.guessInput.value = '';
  }

  render() {
    return (
      <div className="mid-section">
        <h2 className="feedback">
          {this.props.msg}
        </h2>

        <div className="guess-section">
          <form className="guess-form" onSubmit={(e) => {this.onSubmit(e)}}>
            <input type="text" ref={input => this.guessInput = input}
              className="guess-here"
              name="guess-here"
              placeholder="Enter your Guess" />
            <input type="submit"
              className="submit"
              name="submit" value="Guess" />

            <h1 class="guessNum">Guess #</h1>
          </form>
        </div>
      </div>
    );
  }
}
