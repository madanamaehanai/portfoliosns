import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import LeftComponents from "../../components/LeftComponents/LeftComponents";
import RightComponents from "../../components/RightComponents/RightComponents";
import Companyinformation from "../../components/Companyinformation/Companyinformation";

function CompanyInfo() {
  return (
    <>
      <Topbar />
      <div className="HomeComponents">
        <LeftComponents />
        <div className="CenterComponents">
          <Companyinformation />
        </div>
        <RightComponents />
      </div>
    </>
  );
}

export default CompanyInfo;
