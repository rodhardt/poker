import { SingleCard, CardSuits } from "../types";

export const getFlushCards = (
  result: SingleCard[]
): [CardSuits, number[]][] | undefined => {
  const groupedBySuits: Record<CardSuits, number[]> = {
    HEARTS: [],
    DIAMONDS: [],
    SPADES: [],
    CLUBS: [],
  };

  result.forEach((card) => groupedBySuits[card.suit].push(card.number));

  const flushOnly = Object.entries(groupedBySuits).filter(
    (cardsBySuit) => cardsBySuit[1].length >= 5
  );

  return flushOnly.length > 0
    ? (flushOnly as [CardSuits, number[]][])
    : undefined;
};

export const getStraightCards = (
  result: SingleCard[]
): SingleCard[] | undefined => {
  const uniqueSortedCards = result
    .filter(
      (card, index, array) =>
        !array
          .slice(0, index)
          .map((pastCard) => pastCard.number)
          .includes(card.number)
    )
    .sort((firstCard, secondCard) => firstCard.number - secondCard.number);

  // break if not enough cards for a straight
  if (uniqueSortedCards.length < 5) {
    return [];
  }

  const sequenceCards: SingleCard[] = [];

  uniqueSortedCards.forEach((card) => {
    const lastValue = sequenceCards[sequenceCards.length - 1]?.number || 0;
    const currentValue = card.number;

    if (lastValue === currentValue - 1 || lastValue === 0) {
      sequenceCards.push(card);
      sequenceCards.length > 5 && sequenceCards.shift();
    } else {
      sequenceCards.length < 5 &&
        sequenceCards.splice(0, sequenceCards.length) &&
        sequenceCards.push(card);
    }
  });

  const firstCard = uniqueSortedCards[0];
  sequenceCards[sequenceCards.length - 1].number === 13 &&
    firstCard.number === 1 &&
    sequenceCards.push(firstCard);

  const finalSequence = sequenceCards.slice(-5);

  return finalSequence.length === 5 ? finalSequence : undefined;
};
