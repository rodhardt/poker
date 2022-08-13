import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { PlayerData, TableData, SingleCard } from "../../types";
import { FULL_DECK } from "../../constants";
import {reOrderUtgFirst, reOrderDealerFirst} from '../../utils'

type GameProviderProps = {
  children: ReactNode;
};

type GameProviderData = {
  table: TableData;
  players: PlayerData[];
};

const GameContext = createContext<GameProviderData>({} as GameProviderData);

export const GameProvider = ({ children }: GameProviderProps) => {
  const [currentDeck, setCurrentDeck] = useState<SingleCard[]>([...FULL_DECK]);
  const [hasTurnChanged, setHasTurnChanged] = useState<boolean>(false)

  const [table, setTable] = useState<TableData>({
    pot: 0,
    round: 1,
    blind: 20,
    cards: [
      { id: "QH", number: 12, suit: "HEARTS" },
      { id: "KH", number: 13, suit: "HEARTS" },
      { id: "AH", number: 14, suit: "HEARTS" },
      { id: "2D", number: 2, suit: "DIAMONDS" },
      { id: "3D", number: 3, suit: "DIAMONDS" },
    ],
    currentTurn: "SHUFFLE",
    currentBet: undefined,
    currentDealer: "player1",
  });

  const [players, setPlayers] = useState<PlayerData[]>([
    {
      id: "player1",
      avatar: "https://i.pinimg.com/736x/3e/d5/02/3ed5021f16e21972477d18b1b011a823.jpg",
      username: "Hero",
      chips: 1000,
      currentBet: 0,
      isActionTurn: false,
      currentPosition: undefined,
      cards: [
        { id: "AD", number: 14, suit: "DIAMONDS" },
        { id: "2C", number: 2, suit: "CLUBS" },
      ],
      hasFolded: false,
    },
    {
      id: "player2",
      avatar:
        "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_auto/c_scale,w_400/ncom/pt_BR/games/switch/d/donkey-kong-country-tropical-freeze-switch/description-image",
      username: "Donkey Kongey",
      chips: 1000,
      currentBet: 0,
      isActionTurn: false,
      currentPosition: undefined,
      cards: undefined,
      hasFolded: false,
    },
    {
      id: "player3",
      avatar:
        "https://2.bp.blogspot.com/-o_7wk8ff49Q/WhToVcjQh5I/AAAAAAAAGHI/LdZAg9GStoE6tfm_YeZH9xGWkwwWud3fwCLcBGAs/s640/6%2BBet%2BSizing%2BTricks%2Bto%2BSkyrocket%2BYour%2BPoker%2BWinnings.png",
      username: "IBetzU",
      chips: 1000,
      currentBet: 0,
      isActionTurn: false,
      currentPosition: undefined,
      cards: undefined,
      hasFolded: false,
    },
    {
      id: "player4",
      avatar:
        "https://poker.888.pt/blog/sites/blog-poker.888.pt/files/styles/hp_headline_big/public/2020-09/all%20in%20poker%20%281%29.jpg?itok=E-zOAAU-",
      username: "All-Inner",
      chips: 1000,
      currentBet: 0,
      isActionTurn: true,
      currentPosition: undefined,
      cards: undefined,
      hasFolded: false,
    },
    {
      id: "player5",
      avatar: "https://pbs.twimg.com/profile_images/1530712790515654656/-AgXOCWd_400x400.jpg",
      username: "Shark666",
      chips: 1000,
      currentBet: 0,
      isActionTurn: false,
      currentPosition: undefined,
      cards: undefined,
      hasFolded: false,
    },
    {
      id: "player6",
      avatar:
        "https://imagens.brasil.elpais.com/resizer/n14sMmJAHbjjzKt_y0zMtoVUWuw=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/ES7BTCLMZWIY6I4UJDC2RJXKMI.jpg",
      username: "Chip-Eater",
      chips: 1000,
      currentBet: 0,
      isActionTurn: false,
      currentPosition: undefined,
      cards: undefined,
      hasFolded: false,
    },
    {
      id: "player7",
      avatar: "https://www.pokerharder.com/wp-content/uploads/2019/02/1129-242x300.jpg",
      username: "Semi-Bluffer",
      chips: 1000,
      currentBet: 0,
      isActionTurn: false,
      currentPosition: 'DEALER',
      cards: undefined,
      hasFolded: false,
    },
    {
      id: "player8",
      avatar:
        "https://yt3.ggpht.com/tnFppcqKfRCjCqFXVzzV8g0AEfEC6I2ONwGzWvR7m4aXvXkz2UFX3SpjcCv0qtyb6Q0OAGRQ=s900-c-k-c0x00ffffff-no-rj",
      username: "Under the Gun",
      chips: 1000,
      currentBet: 0,
      isActionTurn: false,
      currentPosition: 'SMALL-BLIND',
      cards: undefined,
      hasFolded: false,
    },
    {
      id: "player9",
      avatar: "https://i.ytimg.com/vi/opPmqwUv-W0/hqdefault.jpg",
      username: "Ace up the sleeves",
      chips: 1000,
      currentBet: 0,
      isActionTurn: false,
      currentPosition: 'BIG-BLIND',
      cards: undefined,
      hasFolded: false,
    },
  ]);

  

  const changeRound = () => {
    let shufflingDeck = [...currentDeck];
    const playersDealerFirst = reOrderDealerFirst(players)
    const reset = playersDealerFirst
      .filter((player) => player.chips > 0)
      .map((player) => {
        return {
          ...player,
          cards: [
            ...shufflingDeck.splice(Math.floor(Math.random() * shufflingDeck.length), 1),
            ...shufflingDeck.splice(Math.floor(Math.random() * shufflingDeck.length), 1),
          ],
          isActionTurn: false,
        };
      });
    const reOrder =
      reset[0].currentPosition === "DEALER" ? [...reset.slice(1, reset.length), reset[0]] : reset;
    const positions =
      reset.length > 2
        ? reOrder.map((player, index, array) => {
            const positionList = ["DEALER", "SMALL-BLIND", "BIG-BLIND"];
            const position = index < 3 ? positionList[index] : undefined;
            const actionTurn = array.length > 3 ? index === 3 : index === 0;
            return { ...player, currentPosition: position, isActionTurn: actionTurn };
          })
        : reOrder.map((player, index) => {
            return {
              ...player,
              currentPosition: index === 0 ? "SMALL-BLIND" : "BIG-BLIND",
              isActionTurn: index === 0,
            };
          });
    setPlayers(reOrderUtgFirst(positions as PlayerData[]));
    setCurrentDeck(shufflingDeck);
  };

  const changeTurn = () => {
    // do stuff
    setHasTurnChanged(false)
  };

  

  const findNextPlayer = (currentPlayerIndex: number) => {
    return players.slice(currentPlayerIndex, players.length).findIndex(player => player.chips > 0)
  }

  const callOrBet = (amount: number) => {
    setTable({...table, pot: table.pot + amount})
    const currentPlayerIndex = players.findIndex(player => player.isActionTurn)
    const nextPlayer = findNextPlayer(currentPlayerIndex)
    setPlayers([...players.map((player, index, array) => {
      if (currentPlayerIndex === index) {
        return {...player, chips: player.chips - amount, currentBet: amount}
      } else { 
        return {...player, isActionTurn: index === nextPlayer}
      }
    })])
    if (nextPlayer < 0) {
      setHasTurnChanged(true)
    }
  }

  const foldTurn = (id: string) => {

  };

  
  useEffect(() => {
    if (hasTurnChanged) {
      changeTurn()
    }
  }, [hasTurnChanged])

  return (
    <GameContext.Provider
      value={{
        table,
        players,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);
