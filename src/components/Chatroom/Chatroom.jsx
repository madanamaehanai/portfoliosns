import React from "react";
import { Link } from "react-router-dom";

function Chatroom() {
  return (
    <>
      <div>Chatroom</div>
      <Link to="/" className="topbarLink" style={{ textDecoration: "none" }}>
        ホーム
      </Link>
      <Link
        to="/jobhunting"
        className="topbarLink"
        style={{ textDecoration: "none" }}
      >
        就活
      </Link>
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
