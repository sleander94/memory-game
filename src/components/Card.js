import React from 'react';
import '../styles/Card.css';

const Card = ({ number, registerClick }) => {
  return (
    <img
      src={require(`./images/${number}.png`)}
      className="card"
      data-clicked="false"
      onClick={registerClick}
    ></img>
  );
};

export default Card;
