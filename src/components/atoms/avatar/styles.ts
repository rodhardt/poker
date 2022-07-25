import styled from "styled-components";

type AvatarImageProps = {
  hasLoaded?: boolean;
};

export const AvatarContainer = styled.div`
  display: flex;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: var(--darkerGray);
  overflow: hidden;
  border: 3px solid var(--mainGold);
`;

export const AvatarImage = styled.img<AvatarImageProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${(props) => !props.hasLoaded && "display: none;"}
`;
