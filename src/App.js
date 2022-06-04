import React, { useState } from 'react';
import Scoreboard from './components/Scoreboard';
import './App.css';

const App = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div className="App">
      <Scoreboard score={score} highScore={highScore}></Scoreboard>
    </div>
  );
};

export default App;
