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
            <details>
              <summary>
                <Link
                  to="/CompanyInfo"
                  className="topbarLink"
                  style={{ textDecoration: "none" }}
                >
                  会社情報
                </Link>
              </summary>
              <div>
                <Link
                  to="/inhouse"
                  className="topbarLink"
                  style={{ textDecoration: "none" }}
                >
                  自社開発
                </Link>
                <hr></hr>
                <Link
                  to="/outhouse"
                  className="topbarLink"
                  style={{ textDecoration: "none" }}
                >
                  受託開発
                </Link>
                <hr></hr>
                <Link
                  to="/ses"
                  className="topbarLink"
                  style={{ textDecoration: "none" }}
                >
                  SES
                </Link>
              </div>
            </details>
          </div>
          <div>
            <p>面接対策</p>
            <div></div>
          </div>
          <div>
            <p>ポートフォリオ</p>
            <div></div>
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
