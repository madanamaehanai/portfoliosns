import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import LeftComponents from "../../components/LeftComponents/LeftComponents";
import RightComponents from "../../components/RightComponents/RightComponents";
import Companyinformation from "../../components/Companyinformation/Companyinformation";
import MobileMenu from "../../components/MobileMenu/MobileMenu";

function CompanyInfo() {
  return (
    <div id="global-container">
      <div id="container">
        <div class="mobile-menu__cover"></div>
      <Topbar />
      <div className="HomeComponents">
        <LeftComponents />
        <div className="CenterComponents">
          <Companyinformation />
        </div>
        <RightComponents />
      </div>
      </div>
      <MobileMenu />
    </div>
  );
}

export default CompanyInfo;
