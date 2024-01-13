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

  // MobileMenu クラスの定義も Topbar コンポーネントの中に移動

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
      {/* <div id="global-container">
        <div id="container"></div>
        <nav className="mobile-menu__cover"></nav>
      </div> */}
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="Topbar"></div>
        <div>Topbar</div>
        <div>{user.username}</div>
        <button>ログアウト</button>
      </form>
      <form onSubmit={(e) => handleSubmitmobile(e)}>
        <button className="mobile-menu__btn">モバイルボタン</button>
      </form>
    </div>
  );
}

export default Topbar;