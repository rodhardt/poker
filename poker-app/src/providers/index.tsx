import { ReactNode } from "react";

import { GameProvider } from "./game";

type ProvidersProps = {
  children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return <GameProvider>{children}</GameProvider>;
};

export default Providers;
