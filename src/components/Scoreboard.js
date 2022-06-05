import React from 'react';
import '../styles/Scoreboard.css';

const Scoreboard = ({ score, highScore }) => {
  return (
    <div id="scoreboard">
      <div className="title">Memory Game</div>
      <div className="subTitle">
        Click on each image without clicking on any image twice!{' '}
      </div>
      <div className="scoreContainer">
        Score: {score} | Best: {highScore}
      </div>
    </div>
  );
};

export default Scoreboard;
