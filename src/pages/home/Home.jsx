import React from "react";
import Topbar from "../../components/Topbar/Topbar";
// import Posting from "../../components/Posting/Posting";
import LeftComponents from "../../components/LeftComponents/LeftComponents";
import RightComponents from "../../components/RightComponents/RightComponents";
import CenterComponents from "../../components/CenterComponents/CenterComponents";

function Home() {
  return (
    <div id="global-container">
      <div id="container">
        <Topbar />
        <div className="HomeComponents">
          <LeftComponents />
          <CenterComponents />
          <RightComponents />
        </div>
      </div>
      <nav className="mobile-menu__cover">
        <div className="logo">
          {/* <img class="logo__img" src="images/logo.svg" /> */}
          <span className="logo__stay">Stay</span>
          <span className="logo__world">World</span>
        </div>
        <ul className="mobile-menu__main">
          <li className="mobile-menu__item">
            <a className="mobile-menu__link" href="#">
              <span className="main-title">Our Service</span>
              <span className="sub-title">サービスについて</span>
            </a>
          </li>
          <li className="mobile-menu__item">
            <a className="mobile-menu__link" href="#">
              <span className="main-title">About Us</span>
              <span className="sub-title">私たちについて</span>
            </a>
          </li>
          <li className="mobile-menu__item">
            <a className="mobile-menu__link" href="#">
              <span className="main-title">Contact Us</span>
              <span className="sub-title">コンタクト方法</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
