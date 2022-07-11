import { SingleCard, CardSuits } from "../types";

export const getFlushCards = (result: SingleCard[]): SingleCard[] | undefined => {
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

  // break if no suits had a flush
  if (flushOnly.length === 0) {
    return undefined;
  }

  const [[flushSuit]] = flushOnly;

  return result
    .filter((card) => card.suit === flushSuit)
    .sort((firstCard, secondCard) => firstCard.number - secondCard.number);
};

export const getStraightCards = (result: SingleCard[]): SingleCard[] | undefined => {
  const uniqueSortedCards = result
    .filter(
      (card, index, array) =>
        !array
          .slice(0, index)
          .map((pastCard) => pastCard.number)
          .includes(card.number)
    )
    .sort((firstCard, secondCard) => secondCard.number - firstCard.number);

  // break if not enough cards for a straight
  if (uniqueSortedCards.length < 5) {
    return [];
  }

  const sequenceCards: SingleCard[] = [];

  uniqueSortedCards.forEach((card) => {
    const lastValue = sequenceCards[sequenceCards.length - 1]?.number || 0;
    const currentValue = card.number;

    if (lastValue === currentValue + 1 || lastValue === 0) {
      sequenceCards.length < 5 && sequenceCards.push(card);
    } else {
      sequenceCards.length < 5 &&
        sequenceCards.splice(0, sequenceCards.length) &&
        sequenceCards.push(card);
    }
  });

  // return if no need to check for A2345 straight, since Aces are registered as 14
  if (sequenceCards.length === 5) {
    return sequenceCards;
  }

  const lastCard = sequenceCards[sequenceCards.length - 1];
  uniqueSortedCards[0].number === 14 &&
    lastCard.number === 2 &&
    sequenceCards.push(uniqueSortedCards[0]);

  return sequenceCards.length === 5 ? sequenceCards : undefined;
};

export const getGroupValueCards = (result: SingleCard[]): SingleCard[][] => {
  const resultSortedDesc = result.sort(
    (firstCard, secondCard) => secondCard.number - firstCard.number
  );

  const groupedCards = [[resultSortedDesc[0]]];

  resultSortedDesc.slice(1).forEach((card) => {
    const lastGroupIndex = groupedCards.length - 1;
    const lastGroupValue = groupedCards[lastGroupIndex][0].number;
    if (card.number === lastGroupValue) {
      groupedCards[lastGroupIndex].push(card);
    } else {
      groupedCards.push([card]);
    }
  });

  return groupedCards;
};

export const getFourOfAKind = (groupedResult: SingleCard[][]): SingleCard[] | undefined => {
  const [fourOfAKind] = groupedResult.filter((group) => group.length === 4);

  // break if no four of a kind found
  if (!fourOfAKind) {
    return undefined;
  }

  const removedFour = groupedResult.filter((group) => group.length !== 4);

  return [...fourOfAKind, removedFour[0][0]];
};

export const getThreeOfAKinds = (groupedResult: SingleCard[][]): SingleCard[][] | undefined => {
  const threeOfAKindList = groupedResult.filter((group) => group.length === 3);

  return threeOfAKindList.length > 0 ? threeOfAKindList : undefined;
};

export const getPairs = (groupedResult: SingleCard[][]): SingleCard[][] | undefined => {
  const PairsList = groupedResult.filter((group) => group.length === 2);

  return PairsList.length > 0 ? PairsList : undefined;
};

export const getFullHouse = (
  threeList: SingleCard[][] = [],
  pairList: SingleCard[][] = []
): SingleCard[] | undefined => {
  if (threeList.length === 0 || threeList.length + pairList.length < 2) {
    return undefined;
  }

  const [bestTrio, secondTrio] = threeList;
  const [bestPair] = pairList;

  const pair = secondTrio ? secondTrio.slice(0, 2) : bestPair;

  return [...bestTrio, ...pair];
};
