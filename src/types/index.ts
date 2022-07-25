export type CardSuits = "HEARTS" | "DIAMONDS" | "SPADES" | "CLUBS";

export type SingleCard = {
  id?: string;
  number: number;
  suit: CardSuits;
};

export type PlayerData = {
  id?: string;
  avatar?: string;
  username: string;
  chips: number;
  currentBet?: number;
  isActionTurn?: boolean;
  currentPosition?: "DEALER" | "SMALL-BLIND" | "BIG-BLIND";
  cards?: [SingleCard, SingleCard];
  hasFolded?: boolean;
};

export type TableData = {
  pot: number;
  round: number;
  blind: number;
  cards?: SingleCard[];
  currentTurn: "SHUFFLE" | "PRE-FLOP" | "FLOP" | "TURN" | "RIVER" | "SHOWDOWN";
  currentBet?: number;
  currentDealer?: string;
};
