import "./App.scss";
import { useState } from "react";
import { motion } from "framer-motion";

import Refresh from "./components/Refresh/Refresh";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Refresh onClick={() => setCount(count + 1)} />
      <Footer />
    </>
  );
}

export default App;
