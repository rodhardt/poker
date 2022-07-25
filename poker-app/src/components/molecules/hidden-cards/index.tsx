import React from "react";

import { CardsContainer, HiddenCard } from "./styles";

import { CardSuits } from "../../../types";

import { v4 } from "uuid";

import { CardValue, CardSuit, CardFaceImage } from "../..";

export type HiddenCardsProps = {};

export const HiddenCards: React.FC<HiddenCardsProps> = ({}) => {
  return (
    <CardsContainer>
      <HiddenCard /> <HiddenCard isSecond={true} />
    </CardsContainer>
  );
};

export default HiddenCards;
