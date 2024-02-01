import React from "react";
import Imagen from "../componentes/imagen/small-logo.png";
import "../componentes/CSS/component-profil.css";

export default function Profil() {
  return (
    <>
      <div className="Profil">
        <img src={Imagen} alt="Logo" />;
        <div className="nombre">
          <p> 19 seguidores 20 seguidos 21 algo</p>
          <p> Gabriel</p>
          <p> algo</p>
          <p> algo</p>
          <p> algo</p>
        </div>
      </div>
    </>
  );
}
