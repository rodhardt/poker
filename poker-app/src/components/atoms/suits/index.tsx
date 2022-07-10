import React, { useMemo } from "react";

import { SuitContainer } from "./styles";

import { CardSuits } from "../../../types";
import { SUIT_BLACK_COLOR, SUIT_RED_COLOR } from "../../../constants";

import {
  BsFillSuitSpadeFill,
  BsFillSuitDiamondFill,
  BsFillSuitClubFill,
  BsFillSuitHeartFill,
} from "react-icons/bs";

export type CardSuitProps = {
  suit: CardSuits;
  size?: number;
  isReverse?: boolean;
};

export const CardSuit: React.FC<CardSuitProps> = ({
  suit,
  size = 18,
  isReverse,
}) => {
  const currentSuitIcon = useMemo(() => {
    const mappedIcons = {
      HEARTS: <BsFillSuitHeartFill color={SUIT_RED_COLOR} size={size} />,
      DIAMONDS: <BsFillSuitDiamondFill color={SUIT_RED_COLOR} size={size} />,
      SPADES: <BsFillSuitSpadeFill color={SUIT_BLACK_COLOR} size={size} />,
      CLUBS: <BsFillSuitClubFill color={SUIT_BLACK_COLOR} size={size} />,
    };
    return mappedIcons[suit];
  }, [suit, size]);

  return <SuitContainer isReverse={isReverse}>{currentSuitIcon}</SuitContainer>;
};

export default CardSuit;
