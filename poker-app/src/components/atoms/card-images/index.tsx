import React, { useCallback, useMemo } from "react";

import { JacksImage } from "./jacks";
import { QueensImage } from "./queens";
import { KingsImage } from "./kings";

import { CardSuits } from "../../../types";
import { getSuitColor } from "../../../utils";

export type CardFaceImageProps = {
  number: 11 | 12 | 13;
  suit: CardSuits;
  width?: string;
  height?: string;
};

export const CardFaceImage: React.FC<CardFaceImageProps> = ({
  number,
  suit,
  width,
  height,
}) => {
  const color = getSuitColor(suit);

  const renderImage = () => {
    switch (number) {
      case 11:
        return <JacksImage color={color} width={width} height={height} />;
      case 12:
        return <QueensImage color={color} width={width} height={height} />;
      case 13:
        return <KingsImage color={color} width={width} height={height} />;
    }
  };

  return <>{renderImage()}</>;
};

export default CardFaceImage;
