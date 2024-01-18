import React, { useState } from 'react';
import Button from './Button';
import { CardModel } from '../services/models';
import { updateCard, createCard } from '../services/apiServices';

interface EditPopupProps {
  card: CardModel | null;
  onClose: () => void;
  onUpdate: (updatedCard: CardModel) => void;
}

const EditPopup: React.FC<EditPopupProps> = ({ card, onClose, onUpdate }) => {
  const [editedWord, setEditedWord] = useState(card?.question || '');
  const [editedDefinition, setEditedDefinition] = useState(
    card?.definition || '',
  );
  const [editedCategory, setEditedCategory] = useState(card?.category || '');

  const handleSave = async () => {
    if (card?.id) {
      await updateCard(card.id, editedWord, editedDefinition, editedCategory);
      onUpdate({
        ...card,
        question: editedWord,
        definition: editedDefinition,
        category: editedCategory,
      });
    } else {
      await createCard(editedWord, editedDefinition, editedCategory);
    }

    onClose();
  };

  return (
    <div className="edit-popup">
      <label>
        Question:
        <input
          type="text"
          value={editedWord}
          onChange={(e) => setEditedWord(e.target.value)}
        />
      </label>
      <label>
        Definition:
        <input
          type="text"
          value={editedDefinition}
          onChange={(e) => setEditedDefinition(e.target.value)}
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          value={editedCategory}
          onChange={(e) => setEditedCategory(e.target.value)}
        />
      </label>
      <Button onClick={handleSave}>Save</Button>
      <Button onClick={onClose}>Cancel</Button>
    </div>
  );
};

export default EditPopup;
