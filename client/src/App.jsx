import "./App.scss";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Nav from "./components/Hamburger/Hamburger";
import Refresh from "./components/Refresh/Refresh";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";

function App() {
  const location = useLocation();
  const [pageData, setPageData] = useState({
    color: "#1300ff",
    type: "Opacity",
  });

  const handleRefresh = () => {
    window.location.reload();
  };

  useEffect(() => {
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
    setPageData(getPageData());
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/circle" element={<HomePage type="circle" />} />
        <Route path="/square" element={<HomePage type="square" />} />
        <Route path="/*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Nav {...pageData} />
      <Refresh color={pageData.color} onClick={handleRefresh} />
      <Footer {...pageData} />
    </>
  );
}

export default App;
