export interface TarotCard {
    cardName: string;
    positionName: string;
    explanation: string;
    takeaway: string;
  }
  
  export const tarotCards: TarotCard[] = [
    {
      cardName: 'TheLovers',
      positionName: 'Feelings',
      explanation:
        'The Lovers represents harmony and balance. But in feelings, it asks you to consider the choices that lead to connection—or distance.',
      takeaway: 'What choice are you avoiding?',
    },
    {
      cardName: 'TheTower',
      positionName: 'Future',
      explanation:
        'The Tower is infamous for destruction, but it signals transformation—an opportunity to rebuild from chaos.',
      takeaway: 'What will you create from the ashes?',
    },
  ];
  