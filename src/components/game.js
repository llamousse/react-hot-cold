import React from 'react';
import Nav from './nav';
import Header from './header';
import Feedback from './feedback';

export default class Game extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  // }

  render() {
    return (
      <div className="game">
        <Nav />
        <Header />
        <Feedback />
      </div>
    );
  }
}
