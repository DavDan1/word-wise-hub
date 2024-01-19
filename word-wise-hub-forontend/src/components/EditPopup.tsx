import React, { useRef, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Button from './Button';
import { CardModel } from '../services/models';
import { updateCard, createCard } from '../services/apiServices';
import '../style/EditPopup.css';

interface EditPopupProps {
  card: CardModel | null;
  onClose: () => void;
  onUpdate: (updatedCard: CardModel) => void;
}

const EditPopup: React.FC<EditPopupProps> = ({ card, onClose, onUpdate }) => {
  const [editedWord, setEditedWord] = useState(card?.question || '');
  const [editedDefinition, setEditedDefinition] = useState(card?.answer || '');
  const [editedCategory, setEditedCategory] = useState(card?.category || '');

  const popupRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        popupRef.current &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        !(popupRef.current as any).contains(event.target)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [onClose]);

  const handleSave = async () => {
    if (card?.id) {
      await updateCard(card.id, editedWord, editedDefinition, editedCategory);
      onUpdate({
        ...card,
        question: editedWord,
        answer: editedDefinition,
        category: editedCategory,
      });
      toast.success('🚀 Card successfully updated! 🌈');
    } else {
      await createCard(editedWord, editedDefinition, editedCategory);
    }

    onClose();
  };

  return (
    <div className="edit-popup" ref={popupRef}>
      <label>
        <input
          placeholder="Question"
          type="text"
          value={editedWord}
          onChange={(e) => setEditedWord(e.target.value)}
        />
      </label>
      <label>
        <input
          placeholder="Definition"
          type="text"
          value={editedDefinition}
          onChange={(e) => setEditedDefinition(e.target.value)}
        />
      </label>
      <label>
        <input
          placeholder="Category"
          type="text"
          value={editedCategory}
          onChange={(e) => setEditedCategory(e.target.value)}
        />
      </label>
      <Button className="edit-popup-save" onClick={handleSave}>
        Save
      </Button>
      <Button className="edit-popup-cancel" onClick={onClose}>Cancel</Button>
    </div>
  );
};

export default EditPopup;
