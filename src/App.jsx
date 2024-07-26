import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { usePageData } from "./context/PageDataContext";
import RouteGuard from "./util/RouteGuard/RouteGuard";

import Nav from "./components/Nav/Nav";
import Refresh from "./components/Refresh/Refresh";
import DisplayPage from "./pages/DisplayPage/DisplayPage";
import Footer from "./components/Footer/Footer";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const App = () => {
  // Custom hook to track page type and color using useLocation
  const pageData = usePageData();

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<DisplayPage type="circle" />} />
        {/* Use a RouteGuard to only route to legal types or not-found */}
        <Route path="/:type" element={<RouteGuard />} />
        <Route path="/not-found" element={<NotFoundPage />} />
      </Routes>
      <Nav color={pageData.color} />
      <Refresh color={pageData.color} onClick={handleRefresh} />
      <Footer {...pageData} />
    </>
  );
};

export default App;
