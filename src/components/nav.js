import React from 'react';
import './nav.css';

export default function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="#what" className="nav-what" aria-label="How to Play">
              WHAT?
            </a>
          </li>

          <li>
            <a  href="#new" className="nav-new"
              aria-label="Start New Game"
              // onClick={() => props.onRestartGame()}
              >
              + NEW GAME
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
