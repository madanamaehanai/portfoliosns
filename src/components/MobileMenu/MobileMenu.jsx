import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../state/AuthContext";
import { logoutCall } from "../../actionCalls";

function MobileMenu() {
  const { dispatch } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault(); // リロード回避

    logoutCall(dispatch);
  };
  return (
    <nav className="mobile-menu">
      <div className="logo">
        {/* <img class="logo__img" src="images/logo.svg" /> */}
        <span className="logo__stay">Portfolio</span>
        <span className="logo__world">SNS</span>
      </div>
      <ul className="mobile-menu__main">
        <li className="mobile-menu__item">
          <Link
            to="/"
            className="mobile-menu__link"
            style={{ textDecoration: "none" }}
          >
            <span className="main-title">ホーム</span>
            <span className="sub-title">メイン投稿ページ</span>
          </Link>
        </li>
        <li className="mobile-menu__item">
          <Link
            to="/jobhunting"
            className="mobile-menu__link"
            style={{ textDecoration: "none" }}
          >
            <span className="main-title">就活</span>
            <span className="sub-title">準備及び対策ページ</span>
          </Link>
        </li>
        <li className="mobile-menu__item">
          <Link
            to="/CompanyInfo"
            className="mobile-menu__link"
            style={{ textDecoration: "none" }}
          >
            <span className="main-title">会社情報</span>
            <span className="sub-title">企業研究ページ</span>
          </Link>
        </li>
        <li className="mobile-menu__item">
          <Link
            to="/preparation"
            className="mobile-menu__link"
            style={{ textDecoration: "none" }}
          >
            <span className="main-title">面接対策</span>
            <span className="sub-title">面接準備ページ</span>
          </Link>
        </li>
        <li className="mobile-menu__item">
          <Link
            to="/learning"
            className="mobile-menu__link"
            style={{ textDecoration: "none" }}
          >
            <span className="main-title">プログラミング学習</span>
            <span className="sub-title">学習サポートページ</span>
          </Link>
        </li>
        <li className="mobile-menu__item">
          <Link
            to="/auth"
            className="mobile-menu__link"
            style={{ textDecoration: "none" }}
          >
            <span className="main-title">アカウント一覧</span>
            <span className="sub-title">ユーザー情報ページ</span>
          </Link>
        </li>
        <li className="mobile-menu__item">
          <form className="mobile-menu__link" onSubmit={(e) => handleSubmit(e)}>
            <button className="mobile-menu__btn">ログアウト</button>
          </form>
        </li>
      </ul>
    </nav>
  );
}

export default MobileMenu;
