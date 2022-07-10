import React from "react";

import { TableContainer } from "./styles";

import { Card, CardProps } from "../../molecules/";

export type TableGameProps = {};

export const TableGame: React.FC<TableGameProps> = ({}) => {
  const currentCards = [
    { number: 1, suit: "HEARTS" },
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
  ];
  return (
    <TableContainer>
      <ul>
        {currentCards.map((card) => (
          <Card
            key={card.number}
            number={card.number}
            suit={card.suit as CardProps["suit"]}
          />
        ))}
      </ul>
    </TableContainer>
  );
};

export default TableGame;
