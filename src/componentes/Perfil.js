import React from "react";
import DatabaseResponse from "./JS/DataBaseResponse";

const ProfileInfo = () => {
  const { profile } = DatabaseResponse;

  return (
    <div>
      <h2>Perfil de Usuario</h2>
      <p>
        <strong>Nombre:</strong> {profile.name}
      </p>
      <p>
        <strong>Edad:</strong> {profile.age}
      </p>
      <p>
        <strong>Job:</strong> {profile.job}
      </p>
      <p>
        <strong>País:</strong> {profile.country}
      </p>
    </div>
  );
};

export default ProfileInfo;
