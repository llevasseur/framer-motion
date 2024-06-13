import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { NavProvider } from "./components/Nav/NavContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <NavProvider>
      <App />
    </NavProvider>
  </BrowserRouter>
);
