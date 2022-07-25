import React, { useState } from "react";

import { AvatarContainer, AvatarImage } from "./styles";

export type AvatarProps = {
  url?: string;
};

export const Avatar: React.FC<AvatarProps> = ({ url }) => {
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  return (
    <AvatarContainer>
      <AvatarImage
        src={url}
        alt=""
        onLoad={() => setHasLoaded(true)}
        onError={() => setHasLoaded(false)}
        hasLoaded={hasLoaded}
      />
    </AvatarContainer>
  );
};

export default Avatar;
