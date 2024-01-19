import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import '../style/ToggleCreateAllCards.css';

interface ToggleCreateAllCardsProps {
  onCreate: (word: string, definition: string, category: string) => void;
  onClose: () => void;
}

const ToggleCreateAllCards: React.FC<ToggleCreateAllCardsProps> = ({
  onCreate,
  onClose,
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

    toast.success('🎉 Card successfully created! 🌟');
  };

  const handleCancel = () => {
    setCreateMode(false);
    onClose();
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
          <input
            placeholder="Question"
            type="text"
            id="newWord"
            value={newWord}
            onChange={(e) => setNewWord(e.target.value)}
          />

          <input
            placeholder="Definition"
            type="text"
            id="newDefinition"
            value={newDefinition}
            onChange={(e) => setNewDefinition(e.target.value)}
          />

          <input
            placeholder="Category"
            type="text"
            id="newCategory"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />

          <button
            onClick={handleCreate}
            style={{ backgroundColor: '#5db075', color: '#ffffff' }}
          >
            Create Card
          </button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      )}
      <div className="toggle-ctn-text">
        <h2 className="username-text">Guest</h2>
        <p className="welcome-message">Welcome back!</p>
      </div>
    </div>
  );
};

export default ToggleCreateAllCards;
