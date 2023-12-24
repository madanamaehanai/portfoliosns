import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import LeftComponents from "../../components/LeftComponents/LeftComponents";
import RightComponents from "../../components/RightComponents/RightComponents";
import Contracts from "../../components/Contracts/Contracts";

function Contractdevelopmentcompany() {
  return (
    <>
      <Topbar />
      <div className="HomeComponents">
        <LeftComponents />
        <div className="CenterComponents">
          <Contracts />
        </div>
        <RightComponents />
      </div>
    </>
  );
}

export default Contractdevelopmentcompany;
