import React from 'react';
import '../styles/Display.css';

const Display = ({ cards }) => {
  const shuffleCards = (deck) => {
    let currentIndex = deck.length;
    let randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [deck[currentIndex], deck[randomIndex]] = [
        deck[randomIndex],
        deck[currentIndex],
      ];
    }
    return deck;
  };

  return <div className="display">{shuffleCards(cards)}</div>;
};

export default Display;
