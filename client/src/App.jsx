import "./App.scss";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Nav from "./components/Hamburger/Hamburger";
import Refresh from "./components/Refresh/Refresh";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";

function App() {
  const [location, setLocation] = useState(useLocation());

  const handleRefresh = () => {
    window.location.reload();
  };

  const getPageData = () => {
    switch (location.pathname) {
      case "/square":
        return { color: "#fe0222", type: "Transformations" }; //$red
      case "/":
      case "/circle":
      default:
        return { color: "#1300ff", type: "Opacity" }; //$blue
    }
  };
  return (
    <>
      <Nav {...getPageData()} />
      <Refresh color={getPageData().color} onClick={() => handleRefresh()} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/circle" element={<HomePage type="circle" />} />
        <Route path="/square" element={<HomePage type="square" />} />
        <Route path="/*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer {...getPageData()} />
    </>
  );
}

export default App;
