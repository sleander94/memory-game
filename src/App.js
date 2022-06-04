import React, { useState } from 'react';
import Scoreboard from './components/Scoreboard';
import Display from './components/Display';
import './App.css';

const App = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cards, setCards] = useState([1, 2, 3, 4, 5]);

  return (
    <div className="App">
      <Scoreboard score={score} highScore={highScore}></Scoreboard>
      <Display cards={cards}></Display>
    </div>
  );
};

export default App;
