import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import LeftComponents from "../../components/LeftComponents/LeftComponents";
import RightComponents from "../../components/RightComponents/RightComponents";
import Preparation from "../../components/Preparation/Preparation";

function preparation() {
  return (
    <>
      <Topbar />
      <div className="HomeComponents">
        <LeftComponents />
        <div className="CenterComponents">
          <Preparation />
        </div>
        <RightComponents />
      </div>
    </>
  );
}

export default preparation;
