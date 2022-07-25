import styled from "styled-components";

type ValueProps = {
  isReverse?: boolean;
  color?: string;
};

export const ValueContainer = styled.div<ValueProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  ${(props) => props.color && `color: ${props.color};`}
  ${(props) => props.isReverse && "transform: rotate(180deg);"}
`;
