import styled from "styled-components";

type CardProps = {
  isReverse?: boolean;
  isSeven?: boolean;
  isCenter?: boolean;
  isSuitRed?: boolean;
};

export const CardContainer = styled.li`
  width: 100%;
  aspect-ratio: 0.7;
  padding: 2px 5px;
  display: flex;
  border: 1px solid var(--darkerGray);
  border-radius: 10px;
  box-sizing: border-box;
  background-color: var(--lightGray);
`;

export const Corner = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 20%;
  box-sizing: border-box;

  color: var(--mainBlack);

  ${(props) => props.isReverse && "transform: rotate(180deg);"}
`;

export const Center = styled.div`
  box-sizing: border-box;
  width: 60%;
  height: 100%;
  position: relative;

  padding: 8px 0px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SuitCol = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.isCenter ? "space-around" : "space-between")};
  align-items: center;
  height: 100%;
`;

export const HideContent = styled.div`
  opacity: 0;
`;
