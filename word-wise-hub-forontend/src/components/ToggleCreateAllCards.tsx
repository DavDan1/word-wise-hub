import React from 'react';
import '../style/ToggleCreateAllCards.css';

const ToggleCreateAllCards: React.FC = () => {
  return (
    <div>
      <div className="toggle-container">
        <button className="toggle-btn-active">All Cards</button>
        <button className="toggle-btn-inactive">Create</button>
      </div>
      <h2 className="username-text">Guest</h2>
      <p className="welcome-message">Welcome back!</p>
    </div>
  );
};

export default ToggleCreateAllCards;
