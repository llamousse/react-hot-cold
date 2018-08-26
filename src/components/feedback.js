import React from 'react';
import './feedback.css'

export default function Feedback() {
  return(
    <div className="mid-section">
      <h2 className="feedback">
        Feedback here
      </h2>

      <div className="guess-section">
        <form className="guess-form">
          <input type="text"
            className="guess-here"
            name="guess-here"
            placeholder="Enter your Guess" />
          <input type="submit"
            className="submit"
            name="submit" value="Guess" />

          <h1 class="guessNum">Guess #</h1>
        </form>
      </div>

      <div className="guess-history">

      </div>
    </div>
  );
}
