import React, { useState } from 'react';
import '../style/ToggleCreateAllCards.css';

interface ToggleCreateAllCardsProps {
  onCreate: (word: string, definition: string, category: string) => void;
}

const ToggleCreateAllCards: React.FC<ToggleCreateAllCardsProps> = ({
  onCreate,
}) => {
  const [isCreateMode, setCreateMode] = useState(false);
  const [newWord, setNewWord] = useState('');
  const [newDefinition, setNewDefinition] = useState('');
  const [newCategory, setNewCategory] = useState('');

  const handleCreate = () => {
    if (
      newWord.trim() === '' ||
      newDefinition.trim() === '' ||
      newCategory.trim() === ''
    ) {
      console.error('Please fill in all fields.');
      return;
    }

    onCreate(newWord, newDefinition, newCategory);
    setNewWord('');
    setNewDefinition('');
    setNewCategory('');
    setCreateMode(false);
  };

  return (
    <div>
      <div className="toggle-container">
        <button
          className={`toggle-btn ${
            isCreateMode ? 'toggle-btn-inactive' : 'toggle-btn-active'
          }`}
          onClick={() => setCreateMode(false)}
        >
          All Cards
        </button>
        <button
          className={`toggle-btn ${
            isCreateMode ? 'toggle-btn-active' : 'toggle-btn-inactive'
          }`}
          onClick={() => setCreateMode(true)}
        >
          Create
        </button>
      </div>

      {isCreateMode && (
        <div className="create-card-form">
          <label htmlFor="newWord">Word:</label>
          <input
            type="text"
            id="newWord"
            value={newWord}
            onChange={(e) => setNewWord(e.target.value)}
          />

          <label htmlFor="newDefinition">Definition:</label>
          <input
            type="text"
            id="newDefinition"
            value={newDefinition}
            onChange={(e) => setNewDefinition(e.target.value)}
          />

          <label htmlFor="newCategory">Category:</label>
          <input
            type="text"
            id="newCategory"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />

          <button onClick={handleCreate}>Create Card</button>
        </div>
      )}

      <h2 className="username-text">Guest</h2>
      <p className="welcome-message">Welcome back!</p>
    </div>
  );
};

export default ToggleCreateAllCards;
