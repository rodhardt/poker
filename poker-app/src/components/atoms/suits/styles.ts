import styled from "styled-components";

type SuitProps = {
  isReverse?: boolean;
};

export const SuitContainer = styled.div<SuitProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => props.isReverse && "transform: rotate(180deg);"}
`;
