import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import LeftComponents from "../../components/LeftComponents/LeftComponents";
import RightComponents from "../../components/RightComponents/RightComponents";
import Ses from "../../components/Ses/Ses";

function Sescompany() {
  return (
    <>
      <Topbar />
      <div className="HomeComponents">
        <LeftComponents />
        <div className="CenterComponents">
          <Ses />
        </div>
        <RightComponents />
      </div>
    </>
  );
}

export default Sescompany;
