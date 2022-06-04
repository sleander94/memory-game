import React from 'react';

const Scoreboard = ({ score, highScore }) => {
  return (
    <div id="scoreBoard">
      <div className="title">Memory Game</div>
      <div className="scoreContainer">
        {score} | {highScore}
      </div>
    </div>
  );
};

export default Scoreboard;
