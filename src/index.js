import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
// import Crud from "./components/crud";
import Crud2 from "./components/crud2";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Crud /> */}
    <Crud2 />
  </React.StrictMode>
);
