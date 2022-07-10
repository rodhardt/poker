import React, { useCallback, useMemo } from "react";

import { CardContainer, Corner, Center, SuitCol, HideContent } from "./styles";

import { CardSuits } from "../../../types";

import { v4 } from "uuid";

import { CardValue, CardSuit, CardFaceImage } from "../..";

export type CardProps = {
  number: number;
  suit: CardSuits;
};

export const Card: React.FC<CardProps> = ({ number, suit }) => {
  // mapping number of suits on center of cards and dividing by [sides, center]
  const suitsColMap = useMemo(
    () => [
      [0, 1],
      [0, 2],
      [0, 3],
      [2, 0],
      [2, 1],
      [3, 0],
      [3, 1],
      [3, 2],
      [4, 1],
      [4, 2],
    ],
    []
  );

  const renderColumn = useCallback(
    (variant: "SIDE" | "CENTER") => {
      const keyGen = v4();
      const colPosition = variant === "CENTER" ? 1 : 0;

      return (
        <SuitCol isCenter={variant === "CENTER"}>
          {Array(suitsColMap[number - 1][colPosition])
            .fill(1)
            .map((element, index, array) => (
              <CardSuit
                key={`${keyGen}-${index}`}
                suit={suit}
                isReverse={index >= array.length / 2}
              />
            ))}

          {variant === "CENTER" && number === 7 && (
            <HideContent>
              <CardSuit suit={suit} />
            </HideContent>
          )}
        </SuitCol>
      );
    },
    [number, suit, suitsColMap]
  );

  return (
    <CardContainer>
      <Corner>
        <CardValue number={number} suit={suit} />
        <CardSuit suit={suit} size={12} />
      </Corner>
      {number < 11 ? (
        <Center>
          {renderColumn("SIDE")}
          {renderColumn("CENTER")}
          {renderColumn("SIDE")}
        </Center>
      ) : (
        <Center>
          <CardFaceImage
            number={number as 11 | 12 | 13}
            suit={suit}
            width={"100%"}
            height={"100%"}
          />
        </Center>
      )}
      <Corner isReverse={true}>
        <CardValue number={number} suit={suit} />
        <CardSuit suit={suit} size={12} />
      </Corner>
    </CardContainer>
  );
};

export default Card;
