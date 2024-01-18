import React from 'react';
import '../style/ToggleCreateAllCards.css';

const ToggleCreateAllCards: React.FC = () => {
  return (
    <div className="toggle-container">
      <button className="toggle-btn-active">All Cards</button>
      <button className="toggle-btn-inactive">Create</button>
    </div>
  );
};

export default ToggleCreateAllCards;
