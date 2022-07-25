import { CardSuits } from "../types";
import { SUIT_BLACK_COLOR, SUIT_RED_COLOR } from "../constants";

export const getSuitColor = (suit: CardSuits) => {
  switch (suit) {
    case "HEARTS":
      return SUIT_RED_COLOR;
    case "DIAMONDS":
      return SUIT_RED_COLOR;
    case "SPADES":
      return SUIT_BLACK_COLOR;
    case "CLUBS":
      return SUIT_BLACK_COLOR;
  }
};
