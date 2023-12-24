import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import LeftComponents from "../../components/LeftComponents/LeftComponents";
import RightComponents from "../../components/RightComponents/RightComponents";
import Company from "../../components/Company/Company";

function CompanyRoom() {
  return (
    <>
      <Topbar />
      <div className="HomeComponents">
        <LeftComponents />
        <div className="CenterComponents">
          <Company />
        </div>
        <RightComponents />
      </div>
    </>
  );
}

export default CompanyRoom;
