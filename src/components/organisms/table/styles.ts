import styled from "styled-components";

type PlayerWrapperProps = {
  playerPosition?: string;
  isHero?: boolean;
  isDealer?: boolean;
};

export const TableContainer = styled.section`
  padding: 100px 200px 300px;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Table = styled.div`
  width: 100%;
  height: 100%;
  background-color: #409040;
  border-radius: 50%;

  margin: auto;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 10px solid var(--darkerGray);
`;

export const PlayersTable = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 2fr) 1fr repeat(2, 2fr);
  grid-template-areas:
    ". player9 dealer player8 ."
    "player7 . . . player6"
    ". . . . ."
    "player5 . . . player4"
    ". player3 player1 player2 .";
  position: absolute;

  column-gap: 50px;

  width: calc(100% + 200px);
  height: calc(100% + 100px);
  /* box-sizing: border-box; */

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

export const PlayerWrapper = styled.div<PlayerWrapperProps>`
  display: flex;
  justify-content: center;
  width: 100%;

  position: relative;
  ${(props) => props.playerPosition && `grid-area: ${props.playerPosition};`};
  ${(props) => props.isHero && "transform: translateY(110px);"}
  ${(props) => props.isDealer && "transform: translateY(-50px);"}
`;

export const TableCenter = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 50px;

  box-sizing: border-box;
  align-items: center;
  transform: translateY(-60px);
`;

export const PotWrapper = styled.div`
  padding: 6px 40px;
  border-radius: 20px;
  background-color: var(--mainBlack);
`;

export const CardWrapper = styled.div`
  width: 100px;
`;

export const FlopCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 5px;
  width: 520px;
`;

export const HeroCards = styled.div`
  position: absolute;
  top: -25px;
  left: 50%;

  transform: translate(-50%, -100%);

  display: flex;
  justify-content: center;
  align-items: center;
`;
