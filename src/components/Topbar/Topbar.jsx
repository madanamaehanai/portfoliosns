import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../state/AuthContext";
import { logoutCall } from "../../actionCalls";

function Topbar() {
  const { user, dispatch } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault(); //リロード回避

    logoutCall(dispatch);
  };


  return (
    <div className="TopbarComponents">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="Topbar"></div>
        <div>Topbar</div>
        <div>{user.username}</div>
        <button>ログアウト</button>
      </form>
    </div>
  );
}

export default Topbar;
