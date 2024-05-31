import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./custom.scss";
import "bs5-lightbox";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
