import React from 'react';
import { CardModel } from '../services/models';
import '../style/Card.css';

interface CardProps {
  card: CardModel;
  onEdit: (card: CardModel) => void;
  onDelete: (id: number) => void;
}

const CardComponent: React.FC<CardProps> = ({ card, onEdit, onDelete }) => {
  const contentToDisplay = card.isEditing ? card.editedWord : card.question;

  return (
    <div className="cards-ctn">
      <div className="word-ctn">
        <button className="edit-btn" onClick={() => onEdit(card)}>
          Edit
        </button>
        <div>{contentToDisplay}</div>
        <button className="delete-btn" onClick={() => onDelete(card.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
