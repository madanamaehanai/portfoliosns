import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import LeftComponents from "../../components/LeftComponents/LeftComponents";
import RightComponents from "../../components/RightComponents/RightComponents";
import Ses from "../../components/Ses/Ses";
import MobileMenu from "../../components/MobileMenu/MobileMenu";

function Sescompany() {
  return (
    <div id="global-container">
      <div id="container">
        <div class="mobile-menu__cover"></div>
        <Topbar />
        <div className="HomeComponents">
          <LeftComponents />
          <div className="CenterComponents">
            <Ses />
          </div>
          <RightComponents />
        </div>
      </div>
      <MobileMenu />
    </div>
  );
}

export default Sescompany;
