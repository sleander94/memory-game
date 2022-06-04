import React, { useState, useEffect } from 'react';
import Scoreboard from './components/Scoreboard';
import Display from './components/Display';
import Card from './components/Card';
import './App.css';

const App = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cards, setCards] = useState([]);

  return (
    <div className="App">
      <Scoreboard score={score} highScore={highScore}></Scoreboard>
      <Display cards={cards} score={score}></Display>
    </div>
  );
};

export default App;
