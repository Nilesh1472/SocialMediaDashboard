import React from 'react';
import './Card.css'; // Optional styling file

const Card = ({ title, value, icon }) => {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default Card;
