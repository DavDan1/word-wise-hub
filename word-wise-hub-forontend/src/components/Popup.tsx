import React, { useState } from 'react';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (word: string, definition: string) => void;
  initialWord?: string;
  initialDefinition?: string;
}

const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  onSave,
  initialWord = '',
  initialDefinition = '',
}) => {
  const [word, setWord] = useState(initialWord);
  const [definition, setDefinition] = useState(initialDefinition);

  const handleSave = () => {
    onSave(word, definition);
    onClose();
  };

  return (
    isOpen && (
      <div className="popup">
        <div className="popup-content">
          <h2>Edit Card</h2>
          <label htmlFor="word">Question: </label>
          <input
            type="text"
            id="word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <label htmlFor="definition">Definition: </label>
          <input
            type="text"
            id="definition"
            value={definition}
            onChange={(e) => setDefinition(e.target.value)}
          />
          <div className="popup-buttons">
            <button onClick={handleSave}>Save</button>
            <button onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
