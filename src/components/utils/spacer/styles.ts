import styled from "styled-components";

type SpacedBoxProps = {
  x: number;
  y: number;
};

export const SpacedBox = styled.div<SpacedBoxProps>`
  display: ${(props) => (props.x ? "inline-flex" : "flex")};
  flex-grow: 0;
  flex-shrink: 0;
  width: ${(props) => (props.x ? `${props.x}px` : "auto")};
  height: ${(props) => (props.y ? `${props.y}px` : "auto")};
`;
