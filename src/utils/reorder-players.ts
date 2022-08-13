import { PlayerData } from "../types";

export const reOrderUtgFirst = (playerList: PlayerData[]) => {
  return [...playerList.slice(3, playerList.length), ...playerList.slice(0, 3)];
};

export const reOrderDealerFirst = (playerList: PlayerData[]) => {
  return [
    ...playerList.slice(playerList.length - 3, playerList.length),
    ...playerList.slice(0, playerList.length - 3),
  ];
};
