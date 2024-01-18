import React from 'react';

interface DeleteConfirmationPopupProps {
  onCancel: () => void;
  onConfirm: () => void;
}

const DeleteConfirmationPopup: React.FC<DeleteConfirmationPopupProps> = ({
  onCancel,
  onConfirm,
}) => {
  return (
    <div className="delete-confirmation-popup">
      <p>Are you sure you want to delete this card?</p>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onCancel}>No</button>
    </div>
  );
};

export default DeleteConfirmationPopup;
