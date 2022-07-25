import styled from "styled-components";

type ImagesWrapperProps = {
  isHero?: boolean;
};

export const PlayerContainer = styled.div`
  display: flex;
  width: 100%;
  border-radius: 50%;
  flex-direction: column;
`;

export const ImagesWrapper = styled.div<ImagesWrapperProps>`
  width: 100%;
  display: flex;
  align-items: center;

  ${(props) => props.isHero && "justify-content: center;"}
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 50px;
  padding: 6px 8px;

  box-sizing: border-box;
  border: 1px solid var(--darkGray);
  border-radius: 30px;

  background-color: var(--darkerGray);
`;

export const PlayerName = styled.h3``;

export const PlayerChips = styled.h3``;
