import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Routes";
import { useContext } from "react";
import { ThemeContext } from "./Utils/Context";
import "./Styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
