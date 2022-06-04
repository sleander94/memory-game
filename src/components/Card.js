import React from 'react';

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
