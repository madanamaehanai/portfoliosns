import React from "react";
import Topbar from "../../components/Topbar/Topbar";
// import Posting from "../../components/Posting/Posting";
import LeftComponents from "../../components/LeftComponents/LeftComponents";
import RightComponents from "../../components/RightComponents/RightComponents";
import CenterComponents from "../../components/CenterComponents/CenterComponents";

import MobileMenu from "../../components/MobileMenu/MobileMenu";

function Home() {
  return (
    <div id="global-container">
      <div id="container">
        <div className="mobile-menu__cover"></div>
        <Topbar />
        <div className="HomeComponents">
          <LeftComponents />
          <CenterComponents />
          <RightComponents />
        </div>
      </div>
      <MobileMenu />
    </div>
  );
}

export default Home;
