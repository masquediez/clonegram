import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./componentes/component-navbar";
import Footer from "./componentes/component-footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />

    <Footer />
  </React.StrictMode>
);
