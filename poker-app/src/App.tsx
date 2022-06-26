import React from "react";

import { MainRoutes } from "./routes";
import GlobalStyle from "./styles/global";

export const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <MainRoutes />
    </div>
  );
};

export default App;
