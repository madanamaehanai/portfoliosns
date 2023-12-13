import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import LeftComponents from "../../components/LeftComponents/LeftComponents";
import RightComponents from "../../components/RightComponents/RightComponents";
import Author from "../../components/Author/Author";

function Auth() {
  return (
    <>
      <Topbar />
      <div className="HomeComponents">
        <LeftComponents />
        <div className="CenterComponents">
          <Author />
        </div>
        <RightComponents />
      </div>
    </>
  );
}

export default Auth;
