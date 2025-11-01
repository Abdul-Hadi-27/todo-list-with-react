import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Update from "../pages/Update";
import NotFound from "../pages/NotFound";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/update/:id" element={<Update />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRoutes;
