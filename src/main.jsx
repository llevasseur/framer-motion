import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { NavProvider } from "./components/Nav/NavContext.jsx";
import { PageDataProvider } from "./context/PageDataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PageDataProvider>
      <NavProvider>
        <App />
      </NavProvider>
    </PageDataProvider>
  </BrowserRouter>
);
