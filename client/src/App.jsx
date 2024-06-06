import { useState } from "react";
import "./App.scss";

import { motion } from "framer-motion";
import Refresh from "./components/Refresh/Refresh";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Refresh onClick={() => setCount(count + 1)} />
    </>
  );
}

export default App;
