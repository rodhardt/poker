import styled from "styled-components";

type CornerProps = {
  isBottom?: boolean;
};

export const CardContainer = styled.li`
  width: 80px;
  height: 135px;
  padding: 2px 5px;
  display: flex;
  border: 1px solid var(--darkerGray);
  border-radius: 10px;
  box-sizing: border-box;
`;

export const Corner = styled.div<CornerProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 15%;
  box-sizing: border-box;

  ${(props) => props.isBottom && "transform: rotate(180deg);"}
`;

export const Center = styled.div`
  box-sizing: border-box;
  width: 70%;
  height: 100%;
`;
