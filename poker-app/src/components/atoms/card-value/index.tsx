import React, { useMemo } from "react";

import { ValueContainer } from "./styles";

import { CardSuits } from "../../../types";

import { getSuitColor } from "../../../utils";

export type CardValueProps = {
  number: number;
  suit: CardSuits;
  isReverse?: boolean;
};

export const CardValue: React.FC<CardValueProps> = ({ number, suit, isReverse }) => {
  const suitColor = getSuitColor(suit);

  const symbol = () => {
    const numberToKey = `${number}`;
    const symbolsMap: { [key: string]: string } = {
      "11": "J",
      "12": "Q",
      "13": "K",
      "14": "A",
    };
    return symbolsMap[numberToKey] || numberToKey;
  };

  return (
    <ValueContainer color={suitColor} isReverse={isReverse}>
      {symbol()}
    </ValueContainer>
  );
};

export default CardValue;
