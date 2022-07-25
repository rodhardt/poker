import React, { useState } from "react";

import { SpacedBox } from "./styles";

export type SpacerProps = {
  x?: number;
  y?: number;
};

export const Spacer: React.FC<SpacerProps> = ({ x = 0, y = 0 }) => {
  return <SpacedBox x={x} y={y}></SpacedBox>;
};

export default Spacer;
