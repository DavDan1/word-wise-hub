import React, { useEffect, useState } from 'react';
import Header from './Header';
import ToggleCreateAllCards from './ToggleCreateAllCards';
import { CardModel } from '../services/models';
import CardComponent from './Card';
import Footer from './Footer';
import EditPopup from './EditPopup';
import {
  getCards,
  updateCard,
  deleteCard,
  createCard,
} from '../services/apiServices';

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = () => {
  const [cards, setCards] = useState<CardModel[]>([]);
  const [isEditPopupOpen, setEditPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardModel | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      const fetchedCards: CardModel[] = await getCards();
      setCards(fetchedCards);
    };

    fetchCards();
  }, []);

  const openEditPopup = (card: CardModel) => {
    setSelectedCard(card);
    setEditPopupOpen(true);
  };

  const handleUpdateCard = async (updatedCard: CardModel) => {
    try {
      await updateCard(
        updatedCard.id,
        updatedCard.question,
        updatedCard.definition,
        updatedCard.category,
      );

      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === updatedCard.id ? { ...card, ...updatedCard } : card,
        ),
      );

      setEditPopupOpen(false);
    } catch (error) {
      console.error('Error updating card:', error);
    }
  };

  const handleDeleteCard = async (id: number) => {
    try {
      await deleteCard(id);

      setCards((prevCards) => prevCards.filter((card) => card.id !== id));

      if (selectedCard && selectedCard.id === id) {
        setEditPopupOpen(false);
        setSelectedCard(null);
      }
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };

  const handleCreateCard = async (
    question: string,
    definition: string,
    category: string,
  ) => {
    try {
      const newCard: CardModel = await createCard(
        question,
        definition,
        category,
      );
      setCards((prevCards) => [...prevCards, newCard]);
    } catch (error) {
      console.error('Error creating card:', error);
    }
  };

  return (
    <div className="main-page-ctn">
      <Header />
      <div className="main-page-body">
        <ToggleCreateAllCards onCreate={handleCreateCard} />
        <h2 className="main-page-text">My Words</h2>
        {cards.map((card) => (
          <CardComponent
            key={card.id}
            card={card}
            onEdit={() => openEditPopup(card)}
            onDelete={() => handleDeleteCard(card.id)}
          />
        ))}
      </div>
      <Footer />
      {isEditPopupOpen && selectedCard && (
        <EditPopup
          card={selectedCard}
          onClose={() => setEditPopupOpen(false)}
          onUpdate={handleUpdateCard}
        />
      )}
    </div>
  );
};

export default MainPage;
