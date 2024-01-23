import React from 'react';
import { toast } from 'react-hot-toast';
import '../style/DeleteConfirmationPopup.css';

interface DeleteConfirmationPopupProps {
  onCancel: () => void;
  onConfirm: () => void;
}

const DeleteConfirmationPopup: React.FC<DeleteConfirmationPopupProps> = ({
  onCancel,
  onConfirm,
}) => {
  const showToast = () => {
    toast.error('🗑️ Card successfully deleted! 🎉');
  };

  return (
    <div className="delete-confirmation-popup">
      <p>Are you sure you want to delete this card?</p>
      <button
        className="delete-confirmation-popup-btn"
        onClick={() => {
          onConfirm();
          showToast();
        }}
      >
        Yes
      </button>
      <button
        className="delete-confirmation-popup-btn"
        style={{ backgroundColor: '#5db075', color: '#ffffff' }}
        onClick={onCancel}
      >
        No
      </button>
    </div>
  );
};

export default DeleteConfirmationPopup;
