import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeContainer from "../../../page/Home/HomeContainer";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
      </Routes>
    </BrowserRouter>
  );
};
