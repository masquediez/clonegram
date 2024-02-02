import { useState } from "react";

function Jain() {
  const [isFollowing, setIsFollowing] = useState(false);

  function onClickFollow() {
    setIsFollowing(true);
  }

  function onClickUnfollow() {
    setIsFollowing(false);
  }

  const buttonStyle = {
    backgroundColor: isFollowing ? "green" : "red",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%", // Ajusta la altura según tus necesidades
    margin: "4px",
  };

  return (
    <div style={containerStyle}>
      <button
        style={{ ...buttonStyle, minWidth: "100px" }}
        onClick={isFollowing ? onClickUnfollow : onClickFollow}
      >
        {isFollowing ? "Ja" : "Nein"}
      </button>
    </div>
  );
}

export default Jain;

