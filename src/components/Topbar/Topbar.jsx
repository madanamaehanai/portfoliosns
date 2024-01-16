import React from "react";
import { Link } from "react-router-dom";

function Topbar() {

  const handleSubmitmobile = async (e) => {
    e.preventDefault(); // リロード回避
    const mobileMenu = new MobileMenu(); // ここで MobileMenu インスタンスを作成
    // mobileMenu.init();
  };

  class MobileMenu {
    constructor() {
      this.DOM = {};
      this.DOM.btn = document.querySelector(".mobile-menu__btn");
      this.DOM.cover = document.querySelector(".mobile-menu__cover");
      this.DOM.container = document.querySelector("#global-container");
      this.eventType = this._getEventType();
      this._addEvent();
      // console.log(this.DOM);
    }

    _getEventType() {
      const isTouchCapable = "ontouchstart" in window;

      return isTouchCapable ? "touchstart" : "click";
    }

    _toggle() {
      this.DOM.container.classList.toggle("menu-open");
    }

    _addEvent() {
      this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
      this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
    }
  }

  return (
    <div className="TopbarComponents">
      <div className="logo">
        <Link to="/" className="topbarLink" style={{ textDecoration: "none" }}>
          <span className="logo__textmain">Portfolio</span>
          <span className="logo__textmain">SNS</span>
        </Link>
      </div>

      <div className="mobilemenu">
        <form onSubmit={(e) => handleSubmitmobile(e)}>
          <button className="mobile-menu__btn">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Topbar;
