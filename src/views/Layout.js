import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

export default Layout;
