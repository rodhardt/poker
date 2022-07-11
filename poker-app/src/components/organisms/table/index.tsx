import React from "react";

import { TableContainer } from "./styles";

import { Card, CardProps } from "../../molecules/";

import { SingleCard } from "../../../types";
import {
  getFlushCards,
  getStraightCards,
  getGroupValueCards,
  getFourOfAKind,
  getThreeOfAKinds,
  getPairs,
  getFullHouse,
} from "../../../utils/results-checkers";

export type TableGameProps = {};

export const TableGame: React.FC<TableGameProps> = ({}) => {
  const currentCards = [
    { number: 2, suit: "HEARTS" },
    { number: 3, suit: "SPADES" },
    { number: 4, suit: "DIAMONDS" },
    { number: 5, suit: "HEARTS" },
    { number: 6, suit: "HEARTS" },
    { number: 7, suit: "CLUBS" },
    { number: 8, suit: "SPADES" },
    { number: 9, suit: "DIAMONDS" },
    { number: 10, suit: "HEARTS" },
    { number: 11, suit: "HEARTS" },
    { number: 12, suit: "CLUBS" },
    { number: 13, suit: "HEARTS" },
    { number: 14, suit: "HEARTS" },
  ];

  const testCards: SingleCard[] = [
    { number: 8, suit: "HEARTS" },
    { number: 3, suit: "HEARTS" },
    { number: 2, suit: "SPADES" },
    { number: 2, suit: "SPADES" },
    { number: 3, suit: "SPADES" },
    { number: 2, suit: "SPADES" },
    { number: 8, suit: "SPADES" },
  ];

  const pairs = getPairs(getGroupValueCards(testCards));
  const trios = getThreeOfAKinds(getGroupValueCards(testCards));

  console.log(getFullHouse(trios, pairs));
  return (
    <TableContainer>
      <ul>
        {currentCards.map((card) => (
          <Card key={card.number} number={card.number} suit={card.suit as CardProps["suit"]} />
        ))}
      </ul>
    </TableContainer>
  );
};

export default TableGame;
