import React from 'react'
import Topbar from "../../components/Topbar/Topbar";
import LeftComponents from "../../components/LeftComponents/LeftComponents";
import RightComponents from "../../components/RightComponents/RightComponents";
import LearnComponents from '../../components/LearnComponents/LearnComponents';

function learning() {
  return (
    <>
      <Topbar />
      <div className="HomeComponents">
        <LeftComponents />
        <LearnComponents />
        <RightComponents />
      </div>
    </>
  )
}

export default learning