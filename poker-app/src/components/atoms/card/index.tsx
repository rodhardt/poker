import React from "react";

import { CardContainer, Corner, Center } from "./styles";
import { cardValues, cardSuits } from "../../../constants";

export type CardProps = {
  number: number;
  suit: cardSuits;
};

export const Card: React.FC<CardProps> = ({ number, suit }) => {
  return (
    <CardContainer>
      <Corner>
        <div>{number}</div>
        <div>{suit[0]}</div>
      </Corner>
      <Center></Center>
      <Corner isBottom={true}>
        <div>{number}</div>
        <div>{suit[0]}</div>
      </Corner>
    </CardContainer>
  );
};

export default CardContainer;
