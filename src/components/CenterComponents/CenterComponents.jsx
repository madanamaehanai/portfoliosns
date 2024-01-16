import React from "react";
import Posting from "../Posting/Posting";
import Posts from "../Posts/Posts";
import { useContext } from "react";
import { AuthContext } from "../../state/AuthContext";

function CenterComponents() {
  const { user } = useContext(AuthContext);
  return (
    <div className="CenterComponents">
      <div>{user.username}</div>
      <Posting />
      <Posts />
    </div>
  );
}

export default CenterComponents;
