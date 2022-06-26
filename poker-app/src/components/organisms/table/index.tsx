import React from "react";

import { TableContainer } from "./styles";

import { Card, CardProps } from "../../atoms/card";

export type TableGameProps = {};

export const TableGame: React.FC<TableGameProps> = ({}) => {
  const currentCards = [
    { number: 1, suit: "HEARTS" },
    { number: 13, suit: "SPADES" },
  ];
  return (
    <TableContainer>
      <ul>
        {currentCards.map((card) => (
          <Card number={card.number} suit={card.suit as CardProps["suit"]} />
        ))}
      </ul>
    </TableContainer>
  );
};

export default TableGame;
