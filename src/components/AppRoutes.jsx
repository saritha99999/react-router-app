import React from 'react';
import { Routes, Route } from "react-router-dom";
import FooPage from "../pages/FooPage";
import BarPage from "../pages/BarPage";
import ZPage from "../pages/ZPage";
import YPage from "../pages/YPage";
import XPage from "../pages/XPage";
import HomePage from "../pages/HomePage";

const AppRoutes = () => {
    return (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="foo" element={<FooPage />} />
          <Route path="bar" element={<BarPage />} />
          <Route path="x" element={<XPage />} />
          <Route path="y" element={<YPage />} />
          <Route path="z" element={<ZPage />} />
      </Routes>
    )
}

export default AppRoutes;
