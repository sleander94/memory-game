import React, { useState, useEffect } from 'react';
import Scoreboard from './components/Scoreboard';
import Display from './components/Display';
import Card from './components/Card';
import './App.css';

const App = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(generateCards());
  }, [score]);

  const generateCards = () => {
    let deck = [];
    for (let i = 1; i <= 12; i++) {
      deck.push(<Card key={i} number={i} registerClick={registerClick}></Card>);
    }
    return deck;
  };

  const registerClick = (e) => {
    if (e.target.dataset.clicked === 'false') {
      e.target.dataset.clicked = 'true';
      setScore(score + 1);
    } else {
      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
      let cardElements = document.querySelectorAll('.card');
      for (let i = 0; i < cardElements.length; i++) {
        cardElements[i].dataset.clicked = 'false';
      }
    }
  };

  return (
    <div className="App">
      <Scoreboard score={score} highScore={highScore}></Scoreboard>
      <Display cards={cards} score={score}></Display>
    </div>
  );
};

export default App;
