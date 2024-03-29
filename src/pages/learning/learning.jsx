import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import LeftComponents from "../../components/LeftComponents/LeftComponents";
import RightComponents from "../../components/RightComponents/RightComponents";
import LearnComponents from "../../components/LearnComponents/LearnComponents";
import MobileMenu from "../../components/MobileMenu/MobileMenu";

function learning() {
  return (
    <div id="global-container">
      <div id="container">
        <div className="mobile-menu__cover"></div>
        <Topbar />
        <div className="HomeComponents">
          <LeftComponents />
          <LearnComponents />
          <RightComponents />
        </div>
      </div>
      <MobileMenu />
    </div>
  );
}

export default learning;
