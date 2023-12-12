import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import LeftComponents from "../../components/LeftComponents/LeftComponents";
import RightComponents from "../../components/RightComponents/RightComponents";
import JobhuntComponents from "../../components/JobhuntComponents/JobhuntComponents";

function jobhunting() {
  return (
    <>
      <Topbar />
      <div className="HomeComponents">
        <LeftComponents />
        <JobhuntComponents />
        <RightComponents />
      </div>
    </>
  );
}

export default jobhunting;
