import "./App.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Refresh from "./components/Refresh/Refresh";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";

function App() {
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <BrowserRouter>
      <Refresh onClick={() => handleRefresh()} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
