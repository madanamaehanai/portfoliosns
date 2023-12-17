import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import LeftComponents from "../../components/LeftComponents/LeftComponents";
import RightComponents from "../../components/RightComponents/RightComponents";
import Inhouse from "../../components/Inhouse/Inhouse";

function Contractdevelopmentcompany() {
    return (
        <>
          <Topbar />
          <div className="HomeComponents">
            <LeftComponents />
            <div className="CenterComponents">
              <Inhouse />
            </div>
            <RightComponents />
          </div>
        </>
      );
    }

export default Contractdevelopmentcompany