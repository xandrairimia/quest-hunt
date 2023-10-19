import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import AppRouter from "./components/AppRouter.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
);
