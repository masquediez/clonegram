import React from "react";
import "./Component-navbar.css";
import LogoImage from "../componentes/imagen/avion.png";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="Logo">
        <img src={LogoImage} alt="Logo" />
      </div>
      <div className="Login">
        <button>Login</button>
        <button>Sign up</button>
      </div>
    </div>
  );
}
