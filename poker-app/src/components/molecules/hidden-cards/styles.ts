import styled from "styled-components";

type HiddenCardProps = {
  isSecond?: boolean;
};

export const CardsContainer = styled.div`
  position: relative;
  width: 105px;
  height: 90px;
`;

export const HiddenCard = styled.div<HiddenCardProps>`
  width: 63px;
  aspect-ratio: 0.7;
  padding: 2px 5px;
  display: flex;
  border: 1px solid var(--darkerGray);
  border-radius: 10px;
  box-sizing: border-box;
  background-color: var(--lightGray);

  position: absolute;
  top: 0;
  left: ${(props) => (props.isSecond ? "30px" : "0px")};
  ${(props) => props.isSecond && "z-index: 1;"}
`;
