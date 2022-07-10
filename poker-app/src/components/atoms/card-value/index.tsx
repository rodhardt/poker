import React, { useMemo } from "react";

import { ValueContainer } from "./styles";

import { CardSuits } from "../../../types";

import { getSuitColor } from "../../../utils";

export type CardValueProps = {
  number: number;
  suit: CardSuits;
  isReverse?: boolean;
};

export const CardValue: React.FC<CardValueProps> = ({
  number,
  suit,
  isReverse,
}) => {
  const suitColor = useMemo(() => {
    return getSuitColor(suit);
  }, [suit]);

  const symbol = useMemo(() => {
    const numberToKey = `${number}`;
    const symbolsMap: { [key: string]: string } = {
      "1": "A",
      "11": "J",
      "12": "Q",
      "13": "K",
    };
    return symbolsMap[numberToKey] || numberToKey;
  }, [number]);

  return (
    <ValueContainer color={suitColor} isReverse={isReverse}>
      {symbol}
    </ValueContainer>
  );
};

export default CardValue;
