import React from "react";
import { Link } from "react-router-dom";

function LeftComponents() {
  return (
    <div className="LeftComponents">
      <div>LeftComponents</div>
      <div className="pagelink">
        <Link to="/" className="topbarLink" style={{ textDecoration: "none" }}>
          ホーム
        </Link>
      </div>
      <div className="pagelink">
        <Link
          to="/jobhunting"
          className="topbarLink"
          style={{ textDecoration: "none" }}
        >
          就活
        </Link>
      </div>
      <div className="pagelink">
        <Link
          to="/CompanyInfo"
          className="topbarLink"
          style={{ textDecoration: "none" }}
        >
          会社情報
        </Link>
      </div>
      <div className="pagelink">
        <Link
          to="/inhouse"
          className="topbarLink"
          style={{ textDecoration: "none" }}
        >
          自社開発
        </Link>
      </div>
      <div className="pagelink">
        <Link
          to="/outhouse"
          className="topbarLink"
          style={{ textDecoration: "none" }}
        >
          受託開発
        </Link>
      </div>
      <div className="pagelink">
        <Link
          to="/ses"
          className="topbarLink"
          style={{ textDecoration: "none" }}
        >
          SES
        </Link>
      </div>
      <div className="pagelink">
        <Link
          to="/preparation"
          className="topbarLink"
          style={{ textDecoration: "none" }}
        >
          面接対策
        </Link>
      </div>
      <div className="pagelink">
        <p>ポートフォリオ</p>
      </div>
      <div className="pagelink">
        <Link
          to="/learning"
          className="topbarLink"
          style={{ textDecoration: "none" }}
        >
          プログラミング学習
        </Link>
      </div>
      <div className="pagelink">
        <Link
          to="/auth"
          className="topbarLink"
          style={{ textDecoration: "none" }}
        >
          アカウント一覧
        </Link>
      </div>
      <div className="pagelink"></div>
    </div>
  );
}

export default LeftComponents;
