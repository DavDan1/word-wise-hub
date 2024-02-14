import { CardModel } from '../services/models';

const apiBaseUrl = 'http://localhost:5176/api';

export const createCard = async (
  question: string,
  answer: string,
  category: string,
): Promise<CardModel> => {
  try {
    const response = await fetch(`${apiBaseUrl}/cards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question,
        answer,
        category,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error creating card: ${response.status}`);
    }

    const createdCard: CardModel = await response.json();
    return createdCard;
  } catch (error) {
    console.error('Error creating card:', error);
    throw error;
  }
};

export const getCards = async (): Promise<CardModel[]> => {
  const endpoint = '/cards';

  try {
    const response = await fetch(apiBaseUrl + endpoint);

    if (!response.ok) {
      console.error('Error fetching cards:', (await response.json()) as string);
      return [];
    }

    const cards = await response.json();
    return cards;
  } catch (error) {
    console.error(
      'Error fetching cards:',
      error instanceof Error ? error.message : 'Unknown error',
    );
    return [];
  }
};

export const updateCard = async (
  id: number,
  question: string,
  answer: string,
  category: string,
): Promise<void> => {
  try {
    const response = await fetch(`${apiBaseUrl}/cards/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question,
        answer,
        category,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error updating card: ${response.status}`);
    }
  } catch (error) {
    console.error('Error updating card:', error);
    throw error;
  }
};

export const deleteCard = async (id: number) => {
  const endpoint = `/cards/${id}`;

  try {
    const response = await fetch(apiBaseUrl + endpoint, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error deleting card:', errorData);
      return;
    }

    console.log('Card deleted successfully');
  } catch (error) {
    console.error(
      'Error deleting card:',
      error instanceof Error ? error.message : 'Unknown error',
    );
  }
};
