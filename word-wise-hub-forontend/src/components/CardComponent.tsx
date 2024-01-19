import React, { useState } from 'react';
import { CardModel } from '../services/models';
import '../style/Card.css';
import DeleteConfirmationPopup from './DeleteConfirmationPopup';

interface CardProps {
  card: CardModel;
  onEdit: (card: CardModel) => void;
  onDelete: (id: number) => void;
  onCardClick: (card: CardModel, value: string) => void;
  inputValue: string;
  onInputChange: (value: string) => void;
}

const CardComponent: React.FC<CardProps> = ({
  card,
  onEdit,
  onDelete,
  onCardClick,
  inputValue,
  onInputChange,
}) => {
  const contentToDisplay = card.isEditing ? card.editedWord : card.question;

  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] =
    useState<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputValueChange = (event: any) => {
    onInputChange(event.target.value);
    setIsAnswerCorrect(null);
  };

  const handleClick = () => {
    const trimmedInput = inputValue.trim().toLowerCase();
    const trimmedAnswer = card.answer.trim().toLowerCase();

    const isCorrect = trimmedInput === trimmedAnswer;

    if (isCorrect) {
      console.log('Correct answer!');
    } else {
      console.log('Wrong answer. Try again!');
    }

    setIsAnswerCorrect(isCorrect);

    onCardClick(card, inputValue);
  };

  const handleDeleteClick = () => {
    setShowDeleteConfirmation(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  const handleConfirmDelete = () => {
    onDelete(card.id);
    setShowDeleteConfirmation(false);
  };

  return (
    <div className="cards-ctn">
      <div className="word-ctn">
        <div
          className={`question-ctn ${
            isAnswerCorrect !== null
              ? isAnswerCorrect
                ? 'correct'
                : 'wrong'
              : ''
          }`}
        >
          <p style={{ color: isAnswerCorrect ? 'green' : 'red' }}>
            {contentToDisplay}
          </p>
          <input
            className="answer-input"
            placeholder="Type your answer"
            onChange={handleInputValueChange}
          />
          <img
            onClick={handleClick}
            src={'../../public/answer.svg'}
            alt="SVG Image"
            style={{ width: '70%', padding: '10px', cursor: 'pointer' }}
          />
        </div>
        <div className='delete-edit'>
          <button className="edit-btn" onClick={() => onEdit(card)}>
            <img src={'../../public/pencil.svg'} alt="SVG Image" />
          </button>
          <button className="delete-btn" onClick={handleDeleteClick}>
            <img src={'../../public/delete.svg'} alt="SVG Image" />
          </button>
        </div>
      </div>
      {showDeleteConfirmation && (
        <DeleteConfirmationPopup
          onCancel={handleCancelDelete}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
};

export default CardComponent;
