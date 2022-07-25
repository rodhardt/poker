import React from "react";

import { PlayerContainer, ImagesWrapper, TextWrapper, PlayerName, PlayerChips } from "./styles";
import { PlayerData } from "../../../types";

import { Avatar, HiddenCards } from "../../";
import { Spacer } from "../../";

export type PlayerProps = {
  playerData: PlayerData;
  isHero?: boolean;
};

export const Player: React.FC<PlayerProps> = ({ playerData, isHero }) => {
  return (
    <PlayerContainer>
      <ImagesWrapper isHero={isHero}>
        <Avatar url={playerData.avatar} />
        {!isHero && (
          <>
            <Spacer x={4} />
            <HiddenCards />
          </>
        )}
      </ImagesWrapper>

      <TextWrapper>
        <PlayerName>{playerData.username}</PlayerName>
        <PlayerChips>{`$ ${playerData.chips}`}</PlayerChips>
      </TextWrapper>
    </PlayerContainer>
  );
};

export default Player;
