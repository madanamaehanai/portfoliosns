import React from "react";
import Topbar from "../../components/Topbar/Topbar";
// import Posting from "../../components/Posting/Posting";
import LeftComponents from "../../components/LeftComponents/LeftComponents";
import RightComponents from "../../components/RightComponents/RightComponents";
// import CenterComponents from "../../components/CenterComponents/CenterComponents";

function Home() {
  return (
    <>
      <Topbar />
      <div className="HomeComponents">
        <LeftComponents />
        {/* <CenterComponents /> */}
        <RightComponents />
      </div>
    </>
  );
}

export default Home;
