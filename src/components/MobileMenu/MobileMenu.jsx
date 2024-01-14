import React from 'react'
import { Link } from "react-router-dom";

function MobileMenu() {
  return (
    <nav className="mobile-menu">
        <div className="logo">
          {/* <img class="logo__img" src="images/logo.svg" /> */}
          <span className="logo__stay">Portfolio</span>
          <span className="logo__world">SNS</span>
        </div>
        <ul className="mobile-menu__main">
          <li className="mobile-menu__item">
            <a className="mobile-menu__link">
              <Link
                to="/"
                className="topbarLink"
                style={{ textDecoration: "none" }}
              >
                <span className="main-title">ホーム</span>
                <span className="sub-title">メイン投稿ページ</span>
              </Link>
            </a>
          </li>
          <li className="mobile-menu__item">
            <a className="mobile-menu__link">
              <Link
                to="/jobhunting"
                className="topbarLink"
                style={{ textDecoration: "none" }}
              >
                <span className="main-title">就活</span>
                <span className="sub-title">準備及び対策ページ</span>
              </Link>
            </a>
          </li>
          <li className="mobile-menu__item">
            <a className="mobile-menu__link">
              <Link
                to="/CompanyInfo"
                className="topbarLink"
                style={{ textDecoration: "none" }}
              >
                <span className="main-title">会社情報</span>
                <span className="sub-title">企業研究ページ</span>
              </Link>
            </a>
          </li>
          <li className="mobile-menu__item">
            <a className="mobile-menu__link">
              <Link
                to="/preparation"
                className="topbarLink"
                style={{ textDecoration: "none" }}
              >
                <span className="main-title">面接対策</span>
                <span className="sub-title">面接準備ページ</span>
              </Link>
            </a>
          </li>
          <li className="mobile-menu__item">
            <a className="mobile-menu__link">
              <Link
                to="/learning"
                className="topbarLink"
                style={{ textDecoration: "none" }}
              >
                <span className="main-title">プログラミング学習</span>
                <span className="sub-title">学習サポートページ</span>
              </Link>
            </a>
          </li>
          <li className="mobile-menu__item">
            <a className="mobile-menu__link">
              <Link
                to="/auth"
                className="topbarLink"
                style={{ textDecoration: "none" }}
              >
                <span className="main-title">アカウント一覧</span>
                <span className="sub-title">ユーザー情報ページ</span>
              </Link>
            </a>
          </li>
        </ul>
      </nav>
  )
}

export default MobileMenu