import React from 'react';

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

  const displayCards = (deck) => {
    return <div>{deck}</div>;
  };

  return <div className="display">{shuffleCards(cards)}</div>;
};

export default Display;
