import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import LeftComponents from "../../components/LeftComponents/LeftComponents";
import RightComponents from "../../components/RightComponents/RightComponents";
import Company from "../../components/Company/Company";
import { useParams } from "react-router-dom";
import MobileMenu from "../../components/MobileMenu/MobileMenu";

function CompanyRoom() {
  const { companyId } = useParams();
  // console.log("Location State:", companyId);
  return (
    <div id="global-container">
      <div id="container">
        <div class="mobile-menu__cover"></div>
      <Topbar />
      <div className="HomeComponents">
        <LeftComponents />
        <div className="CenterComponents">
          <Company />
        </div>
        <RightComponents />
      </div>
      </div>
      <MobileMenu />
    </div>
  );
}

export default CompanyRoom;
