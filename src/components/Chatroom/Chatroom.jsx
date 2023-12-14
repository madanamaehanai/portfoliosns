import React from "react";
import { Link } from "react-router-dom";

function Chatroom() {
  return (
    <>
      <div>Chatroom</div>
      <Link to="/" className="topbarLink" style={{ textDecoration: "none" }}>
        ホーム
      </Link>
      <div>
        <Link
          to="/jobhunting"
          className="topbarLink"
          style={{ textDecoration: "none" }}
        >
          就活
        </Link>
        <div>
          <div>
            <p>会社情報</p>
            <div>
              <p>自社開発</p>
              <p>受託開発</p>
              <p>SES</p>
            </div>
          </div>
          <div>
            <p>面接対策</p>
            <div>

            </div>
          </div>
          <div>
            <p>ポートフォリオ</p>
            <div>

            </div>
          </div>
        </div>
      </div>
      <Link
        to="/learning"
        className="topbarLink"
        style={{ textDecoration: "none" }}
      >
        プログラミング学習
      </Link>
      <Link
        to="/auth"
        className="topbarLink"
        style={{ textDecoration: "none" }}
      >
        アカウント一覧
      </Link>
    </>
  );
}

export default Chatroom;
