import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CurrentUserProvider } from "./context/userContext/CurrentUserProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CurrentUserProvider>
        <App />
  </CurrentUserProvider>
);
