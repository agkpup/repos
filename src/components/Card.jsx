// Card.js

import React from 'react';
import '../css/card.css'; 
import '../css/typewriter.css';
const Card = ({ gifUrl, text }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={gifUrl} alt="GIF" />
      </div>
      <div className="card-text">
        <p className='typewriter'>{text}</p>
      </div>
    </div>
  );
};

export default Card;
