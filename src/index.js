import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CurrentUserProvider } from "./context/userContext/CurrentUserProvider";
import AllUsersContextProvider from "./context/allUsers/AllUsersContextProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AllUsersContextProvider>
    <CurrentUserProvider>
      <App />
    </CurrentUserProvider>
  </AllUsersContextProvider>
);
