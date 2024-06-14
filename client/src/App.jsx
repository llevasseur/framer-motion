import "./App.scss";
import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Refresh from "./components/Refresh/Refresh";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";

function App() {
  const location = useLocation();
  const [pageData, setPageData] = useState({
    color: "#1300ff",
    type: "Opacity",
  }); // default to circle Opacity

  const handleRefresh = () => {
    window.location.reload();
  };

  useEffect(() => {
    const getPageData = () => {
      switch (location.pathname) {
        case "/square":
          return { color: "#fe0222", type: "Transformations" }; //$red
        case "/pill":
          return { color: "#00ccff", type: "Spring Hover" };
        case "/drag":
          return { color: "#900af6", type: "Drag" };
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
        <Route path="/pill" element={<HomePage type="pill" />} />
        <Route path="drag" element={<HomePage type="drag" />} />
        <Route
          path="/*"
          element={
            <h1
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "16px",
              }}
            >
              404 Not Found
            </h1>
          }
        />
      </Routes>
      <Nav {...pageData} />
      <Refresh color={pageData.color} onClick={handleRefresh} />
      <Footer {...pageData} />
    </>
  );
}

export default App;
