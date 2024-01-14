import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import LeftComponents from "../../components/LeftComponents/LeftComponents";
import RightComponents from "../../components/RightComponents/RightComponents";
import JobhuntComponents from "../../components/JobhuntComponents/JobhuntComponents";
import MobileMenu from "../../components/MobileMenu/MobileMenu";

function jobhunting() {
  return (
    <div id="global-container">
      <div id="container">
        <div class="mobile-menu__cover"></div>
        <Topbar />
        <div className="HomeComponents">
          <LeftComponents />
          <JobhuntComponents />
          <RightComponents />
        </div>
      </div>
      <MobileMenu />
    </div>
  );
}

export default jobhunting;
