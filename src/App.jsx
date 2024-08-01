import "./App.scss";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { usePageData } from "./context/PageDataContext";
import RouteGuard from "./util/RouteGuard/RouteGuard";

import Nav from "./components/Nav/Nav";
import Refresh from "./components/Refresh/Refresh";
import DisplayPage from "./pages/DisplayPage/DisplayPage";
import Footer from "./components/Footer/Footer";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import { useExponentialHeight } from "./hooks/useExponentialHeight";

const App = () => {
  // Custom hook to track page type and color using useLocation
  const pageData = usePageData();

  const [height, setHeight] = useState(
    (window.innerHeight - 64) / window.innerHeight
  );

  const handleHeightChange = (newHeight) => {
    setHeight(newHeight);
  };

  // Sets window event listeners for dynamic background height
  useExponentialHeight(0.72, 4300, handleHeightChange);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={<DisplayPage type="circle" height={height} />}
          />
          {/* Use a RouteGuard to only route to legal types or not-found */}
          <Route path="/:type" element={<RouteGuard height={height} />} />
          <Route path="/not-found" element={<NotFoundPage height={height} />} />
        </Routes>
        <Footer {...pageData} height={height} />
      </div>
      <Nav color={pageData.color} />
      <Refresh color={pageData.color} onClick={handleRefresh} />
    </>
  );
};

export default App;
