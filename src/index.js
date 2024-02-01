import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Navbar from "./componentes/component-navbar";
import Footer from "./componentes/component-footer";
import Gallery from "./componentes/component-gallery";
import Profil from "./componentes/component-profil";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Profil />

    <Gallery />
    <Footer />
  </React.StrictMode>
);
