import React from "react";

import {
  TableContainer,
  Table,
  PlayersTable,
  PlayerWrapper,
  TableCenter,
  PotWrapper,
  CardWrapper,
  FlopCards,
  HeroCards,
} from "./styles";

import { Card, Player, Avatar, Spacer } from "../../";

import { useGame } from "../../../providers/game";

export type TableGameProps = {};

export const TableGame: React.FC<TableGameProps> = ({}) => {
  const { table, players } = useGame();

  return (
    <TableContainer>
      <Table>
        <PlayersTable>
          {players.map((player) => (
            <PlayerWrapper
              key={`wrapper-${player.id}`}
              playerPosition={player.id}
              isHero={player.id === "player1"}
            >
              <Player
                key={`player-${player.id}`}
                playerData={player}
                isHero={player.id === "player1"}
              />
              {player.id === "player1" && (
                <HeroCards>
                  {player.cards?.map((card) => (
                    <CardWrapper key={`wrapper-${card.id}`}>
                      <Card key={`card-${card.id}`} number={card.number} suit={card.suit} />
                    </CardWrapper>
                  ))}
                </HeroCards>
              )}
            </PlayerWrapper>
          ))}
          <PlayerWrapper playerPosition={"dealer"} isDealer={true}>
            <Avatar url={"https://icon-library.com/images/tie-icon-24.png"} />
          </PlayerWrapper>
        </PlayersTable>
        <TableCenter>
          <PotWrapper>{`Pot: $ ${table.pot}`}</PotWrapper>
          <Spacer y={8} />
          <FlopCards>
            {table.cards?.map((card) => (
              <CardWrapper key={`wrapper-${card.id}`}>
                <Card key={`card-${card.id}`} number={card.number} suit={card.suit} />
              </CardWrapper>
            ))}
          </FlopCards>
        </TableCenter>
      </Table>
    </TableContainer>
  );
};

export default TableGame;
