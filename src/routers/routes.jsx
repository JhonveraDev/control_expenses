import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Login, Home } from "../index";
export function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/hm" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
