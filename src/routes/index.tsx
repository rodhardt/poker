import React from "react";

import { Route, Routes } from "react-router-dom";

import { GamePage } from "../pages";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GamePage />} />
    </Routes>
  );
};

export default MainRoutes;
