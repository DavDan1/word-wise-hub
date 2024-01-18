import React from 'react';
import '../style/Card.css';

interface CardProps {
  word: string;
}

const Card: React.FC<CardProps> = ({ word }) => {
  return (
    <div className="cards-ctn">
      <div className="word-ctn">
        <button className="edit-btn">Edit</button>
        <div>{word}</div>
        <button className="delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default Card;
