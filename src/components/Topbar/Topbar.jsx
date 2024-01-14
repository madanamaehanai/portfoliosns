import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../state/AuthContext";
import { logoutCall } from "../../actionCalls";

function Topbar() {
  const { user, dispatch } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault(); // リロード回避

    logoutCall(dispatch);
  };

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
        <span className="logo__textmain">Portfolio</span>
        <span className="logo__textmain">SNS</span>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="Topbar"></div>
        <div>Topbar</div>
        <div>{user.username}</div>
        <button>ログアウト</button>
      </form>
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
